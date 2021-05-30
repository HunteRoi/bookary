import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book.routing';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@NgModule({
	declarations: [],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'book' }],
	imports: [CommonModule, BookRoutingModule]
})
export class BookModule {}
