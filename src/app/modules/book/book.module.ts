import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { BookRoutingModule } from './book.routing';
import { BooksComponent } from './containers/books/books.component';
import { BookComponent } from './containers/book/book.component';
import { BookFormComponent } from './containers/book-form/book-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [
    BooksComponent,
    BookComponent,
    BookFormComponent,
    SearchBarComponent
  ],
	imports: [CommonModule, BookRoutingModule, SharedModule],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'book' }]
})
export class BookModule {}
