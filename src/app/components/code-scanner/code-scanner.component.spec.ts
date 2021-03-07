import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeScannerComponent } from './code-scanner.component';

describe('CodeScannerComponent', () => {
  let component: CodeScannerComponent;
  let fixture: ComponentFixture<CodeScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
