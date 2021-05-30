import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";

import { UserService } from "@core/services/user.service";
import { LoadProfile, LoadProfileFailure, LoadProfileSuccess, RequestPayload } from "../actions";
import { User } from "@core/models";


@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(LoadProfile),
    switchMap(({ payload }: { payload: RequestPayload }) => this.userService.getUserById(payload.uid).valueChanges().pipe(
      map((user: User) => LoadProfileSuccess({ profile: user })),
      catchError(error => of(LoadProfileFailure(error)))
    ))
  ));
}
