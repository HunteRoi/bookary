import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { PageTitleService } from './services/page-title.service';
import { LanguagesService } from './services/languages.service';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
		HttpClientModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({ maxAge: 25/*, logOnly: !environment.production*/ }),
		EffectsModule.forRoot(effects),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,

		SharedModule
	],
	providers: [
		AuthService,
		UserService,
		PageTitleService,
		LanguagesService
	],
	declarations: [LanguageSelectorComponent, UserMenuComponent],
	exports: [LanguageSelectorComponent, UserMenuComponent]
})
export class CoreModule {}
