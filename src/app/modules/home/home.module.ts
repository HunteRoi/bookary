import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { HomepageComponent } from './containers/homepage/homepage.component';

@NgModule({
	declarations: [
    HomepageComponent
  ],
	imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
