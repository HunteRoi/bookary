import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Features } from '../../features';
import { UserState } from '../reducers/user.reducer';
import { AppState } from '../state';

export const selectUserState = createFeatureSelector<AppState, UserState>(Features.User);
export const selectIsAuthenticated = createSelector(selectUserState, (state: UserState) => !!state.currentUser);
export const selectUser = createSelector(selectUserState, (state: UserState) => state.currentUser);
export const selectIsLoading = createSelector(selectUserState, (state: UserState) => state.isLoading);
export const selectError = createSelector(selectUserState, (state: UserState) => state.error);

