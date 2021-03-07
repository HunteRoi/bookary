import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { LoanDetailsService } from '../services/loan-details.service';
import { LoanDetails } from '../models/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsResolver implements Resolve<LoanDetails[] | boolean> {
  constructor(private loanDetailsService: LoanDetailsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoanDetails[] | boolean> {
    return this.loanDetailsService
      .getLoanDetailsByBookCode(route.params.id)
      .pipe(catchError(err => this.router.navigate(['not-found'])));
  }
}
