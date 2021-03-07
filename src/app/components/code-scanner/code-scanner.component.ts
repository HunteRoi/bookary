import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

import { EMPTY_STRING } from 'src/app/constants';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-code-scanner',
  templateUrl: './code-scanner.component.html',
  styleUrls: ['./code-scanner.component.css'],
})
export class CodeScannerComponent {
  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent;
  @ViewChild('codeInput') codeInput: ElementRef;
  @Output() code: EventEmitter<string>;

  lastScannedCode: string;
  lastScanDate: number;
  show: boolean;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.lastScannedCode = EMPTY_STRING;
    this.show = false;
    this.lastScanDate = new Date().getTime();
    this.code = new EventEmitter<string>();
    iconRegistry.addSvgIcon('barcode-scanner', sanitizer.bypassSecurityTrustResourceUrl('assets/barcode-scanner.svg'));
  }

  onEnter() {
    this.lastScanDate = new Date().getTime();
    this.lastScannedCode = this.codeInput.nativeElement.value;
    this.validate();
  }

  onBarcodeScanned(result: any) {
    const now = new Date().getTime();
    if (now < this.lastScanDate + 3000 && result.codeResult.code === this.lastScannedCode) return;

    this.lastScannedCode = result.codeResult.code;
    this.lastScanDate = now;

    this.notificationService.emitSoundNotifAsync();
    this.changeDetectorRef.detectChanges();
  }

  onClick(event: Event | null = null) {
    if (event) event.stopPropagation();

    this.show = !this.show;

    if (this.show) {
      this.barcodeScanner.start();
    } else {
      this.barcodeScanner.stop();
    }
  }

  validate() {
    if (this.lastScannedCode) {
      this.code.emit(this.lastScannedCode);

      this.lastScannedCode = EMPTY_STRING;
      this.codeInput.nativeElement.value = null;

      if (this.show) {
        this.onClick();
      }
    }
  }
}
