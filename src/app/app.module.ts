import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
	declarations: [LayoutComponent, HeaderComponent, FooterComponent],
	providers: [Title],
	imports: [BrowserModule, SharedModule, CoreModule, AppRoutingModule],
	bootstrap: [LayoutComponent],
})
export class AppModule {}
