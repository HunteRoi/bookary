import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from 'src/app/data/models/Book';
import { LoanDetails } from 'src/app/data/models/LoanDetails';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
  book: Observable<Book>;
  loanDetails: Observable<LoanDetails[]>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log('start init');

    this.route.data.subscribe((data: { book: Observable<Book>, loanDetails: Observable<LoanDetails[]> }) => {
      console.log('route', data);

      this.book = data.book;
      this.loanDetails = data.loanDetails;
    });

    console.log('end init');
  }

  goToBook(code: string) {
    this.router.navigate(['books', code]);
  }
}
