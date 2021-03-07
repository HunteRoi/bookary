import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | boolean> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | boolean> {
    return this.userService
      .getUserById(route.params.id)
      .valueChanges()
      .pipe(catchError(err => this.router.navigate(['not-found'])));
  }
}
