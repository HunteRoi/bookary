import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { CustomSerializer } from './store/reducers/router.reducer';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LanguageSelectorComponent } from './containers/language-selector/language-selector.component';

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
		StoreRouterConnectingModule.forRoot(),
		StoreDevtoolsModule.instrument({ maxAge: 25/*, logOnly: !environment.production*/ }),
		EffectsModule.forRoot(effects),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,

		SharedModule
	],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: CustomSerializer,
		},
		AuthService,
		UserService
	],
	declarations: [UserCardComponent, LanguageSelectorComponent],
	exports: [UserCardComponent, LanguageSelectorComponent]
})
export class CoreModule {}
