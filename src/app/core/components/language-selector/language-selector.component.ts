import { Component } from '@angular/core';
import { LanguagesService } from '@core/services/languages.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(private languagesService: LanguagesService) {}

  get langs() {
    return this.languagesService.langs;
  }

  get activeLang() {
    return this.languagesService.activeLang;
  }

  onLangSelection(langId: string) {
    this.languagesService.changeLanguage(langId);
  }
}
