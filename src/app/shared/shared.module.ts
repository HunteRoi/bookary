import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';

import { TranslocoRootModule } from './transloco/transloco-root.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

export const modules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	TranslocoRootModule,
	FontAwesomeModule,
	MaterialModule,
	FlexLayoutModule,
	StoreModule,
	RouterModule,
];

@NgModule({
	declarations: [
    LoadingComponent
  ],
	imports: modules,
	exports: modules,
})
export class SharedModule {}
