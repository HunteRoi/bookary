import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "@core/services/auth.service";
import * as UserActions from '../actions/user.actions';
import { catchError, delay, map, switchMap, tap } from "rxjs/operators";
import { defer, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private auth: AuthService, private store: Store, private router: Router) {}

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.GetUser),
    delay(200),
    switchMap(() => {
      return this.auth.user.pipe(
        map(user => user ? UserActions.Authenticated(user) : UserActions.NotAuthenticated()),
        catchError(error => of(UserActions.Error({ error })))
      )
    })
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.Login),
    switchMap(() => {
      return of(this.auth.signIn()).pipe(
        map(() => UserActions.GetUser()),
        catchError(error => of(UserActions.Error({ error })))
      )
    })
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.Logout),
    switchMap(() => {
      return of(this.auth.signOut()).pipe(
        map(() => UserActions.NotAuthenticated()),
        catchError(error => of(UserActions.Error({ error })))
      )
    }),
    tap(() => this.router.navigate(['/']))
  ));

  init$ = createEffect(() => defer(() => 
    this.store.dispatch(UserActions.GetUser())
  ), { dispatch: false });
}
