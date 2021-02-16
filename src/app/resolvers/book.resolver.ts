import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BookService } from './../data/services/book.service';
import { Book } from '../data/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book | undefined | boolean> {
  constructor(private bookService: BookService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book | undefined | boolean> {
    return this.bookService
      .getBookByCode(route.params.id)
      .pipe(catchError(err => this.router.navigate(['not-found'])));
  }
}
