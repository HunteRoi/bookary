import { Component, OnChanges } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnChanges {
  langs: { id: string, label: string }[];
  activeLang: string;

  constructor(private translocoService: TranslocoService) {
    this.langs = this.translocoService.getAvailableLangs() as { id: string, label: string }[];
    this.activeLang = this.translocoService.getActiveLang();
  }

  ngOnChanges() {
    this.activeLang = this.translocoService.getActiveLang();
  }

  onSelection(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
