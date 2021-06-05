import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

export const materialModules = [
	MatSidenavModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatListModule,
	MatMenuModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatProgressSpinnerModule,
	MatButtonModule,
	MatExpansionModule,
	MatNativeDateModule,
	MatDatepickerModule,
];

@NgModule({
	imports: materialModules,
	exports: materialModules,
	providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-BE' }],
})
export class MaterialModule {}
