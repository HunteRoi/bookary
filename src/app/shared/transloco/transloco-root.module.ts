import { HttpClient } from '@angular/common/http';
import {
	TRANSLOCO_LOADER,
	Translation,
	TranslocoLoader,
	TRANSLOCO_CONFIG,
	translocoConfig,
	TranslocoModule,
	TRANSLOCO_LOADING_TEMPLATE,
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { LoadingComponent } from '../components/loading/loading.component';

@Injectable()
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private http: HttpClient) { }

	getTranslation(lang: string): Observable<Translation> {
		return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: [{ id: 'en', label: 'English' }, { id: 'fr', label: 'Français' }],
				defaultLang: 'fr',
				fallbackLang: 'fr',
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: environment.production,
			}),
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
		{
			provide: TRANSLOCO_LOADING_TEMPLATE,
			useValue: LoadingComponent,
		},
	],
})
export class TranslocoRootModule { }
