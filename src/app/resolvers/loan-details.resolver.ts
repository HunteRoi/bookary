import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { LoanDetailsService } from './../data/services/loan-details.service';
import { LoanDetails } from '../data/models/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsResolver implements Resolve<LoanDetails[]> {
  constructor(private loanDetailsService: LoanDetailsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoanDetails[]> {
    return this.loanDetailsService.getLoanDetailsByBookCode(route.params.id);
  }
}
