import { createReducer, on } from "@ngrx/store";

import { User } from "@core/models";
import * as UserActions from '../actions/user.actions';

export interface UserState {
  isLoading: boolean;
  error?: any;
  currentUser?: User;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  currentUser: null
};

export const reducer = createReducer<UserState>(
  initialState,
  on(UserActions.GetUser, (state) => ({ ...state, isLoading: true })),
  on(UserActions.Authenticated, (state, currentUser) => ({...state, currentUser, isLoading: false })),
  on(UserActions.NotAuthenticated, (state) => ({ ...state, currentUser: null, isLoading: false })),
  on(UserActions.Login, (state) => ({ ...state, isLoading: true })),
  on(UserActions.Logout, (state) => ({ ...state, currentUser: null, isLoading: true })),
  on(UserActions.Error, (state, { error } ) => ({ ...state, error, isLoading: false }))
);
