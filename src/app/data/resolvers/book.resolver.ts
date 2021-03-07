import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { BookService } from '../services/book.service';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book | boolean> {
  constructor(private bookService: BookService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book | boolean> {
    return this.bookService
      .getBookByCode(route.params.id)
      .pipe(take(1), catchError(err => this.router.navigate(['not-found'])));
  }
}
