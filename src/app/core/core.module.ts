import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import { SharedModule } from '@shared/shared.module';
import { DataModule } from '@data/data.module';

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
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreRouterConnectingModule.forRoot(),
		!environment.production
			? StoreDevtoolsModule.instrument({ maxAge: 50 })
			: [],
		EffectsModule.forRoot([RouterEffects]),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,

		SharedModule,
		DataModule
	],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: CustomSerializer,
		},
	],
	declarations: [UserCardComponent],
	exports: [UserCardComponent]
})
export class CoreModule {}
