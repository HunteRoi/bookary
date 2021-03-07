import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from 'src/app/data/models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() bookDetails!: Observable<Book>;

  constructor() { }

}
