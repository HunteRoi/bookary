import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

type ActiveLangs =  { id: string, label: string }[];

@Injectable()
export class LanguagesService {
  langs: ActiveLangs;
  activeLang: { id: string, label: string };

  constructor(private translateService: TranslocoService) {
    this.langs = this.translateService.getAvailableLangs() as ActiveLangs;
    this.translateService.langChanges$.subscribe(langId => {
      this.activeLang = this.langs.find(lng => lng.id === langId);
    });
  }

  changeLanguage(langId: string) {
    this.translateService.setActiveLang(langId);
  }
}
