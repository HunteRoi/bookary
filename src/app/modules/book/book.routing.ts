import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './containers/book-form/book-form.component';
import { BookComponent } from './containers/book/book.component';
import { BooksComponent } from './containers/books/books.component';

const routes: Routes = [
	{
		path: 'new',
		component: BookFormComponent
	},
	{
		path: ':id',
		children: [
			{
				path: 'edit',
				component: BookFormComponent
			},
			{
				path: '',
				component: BookComponent,
			}
		]
	},
	{
		path: '',
		component: BooksComponent,
		data: { scope: 'book', title: 'title' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BookRoutingModule {}
