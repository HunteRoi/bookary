import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { HomepageComponent } from './containers/homepage/homepage.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [SharedModule, HomeRoutingModule],
	providers: [{provide: TRANSLOCO_SCOPE, useValue: 'home'}],
})
export class HomeModule { }
