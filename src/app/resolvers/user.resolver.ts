import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './../data/services/user.service';
import { User } from '../data/models/User';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | undefined | boolean> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | undefined | boolean> {
    return this.userService
      .getUserById(route.params.id)
      .valueChanges()
      .pipe(catchError(err => this.router.navigate(['not-found'])));
  }
}
