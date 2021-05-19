import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	RouterStateSerializer,
	StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env';
import { RouterEffects } from './store/effects/router.effects';
import { reducers, metaReducers } from './store/reducers';
import { CustomSerializer } from './store/reducers/router.reducers';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserCardComponent } from './components/user-card/user-card.component';

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
		FontAwesomeModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreRouterConnectingModule.forRoot(),
		!environment.production
			? StoreDevtoolsModule.instrument({ maxAge: 50 })
			: [],
		EffectsModule.forRoot([RouterEffects]),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
	],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: CustomSerializer,
		},
	],
	declarations: [
   UserCardComponent
	],
})
export class CoreModule {}
