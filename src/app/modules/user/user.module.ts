import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { EffectsModule } from '@ngrx/effects';

import { Features } from './store/features';
import { UserRoutingModule } from './user.routing';
import { reducer } from './store/reducers/profile.reducer';
import { effects } from './store/effects';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [
    UserProfileComponent,
    ProfileDetailsComponent,
    ProfileSummaryComponent
  ],
	imports: [
		CommonModule, 
		UserRoutingModule,
		SharedModule,
		StoreModule.forFeature(Features.Profile, reducer),
		EffectsModule.forFeature(effects)
	],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'user' }]
})
export class UserModule {}
