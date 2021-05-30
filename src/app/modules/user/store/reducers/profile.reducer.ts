import { createReducer, on } from "@ngrx/store";

import { User } from "@core/models";
import * as ProfileActions from '../actions/profile.actions';

export interface ProfileState {
  isLoading: boolean;
  error?: any;
  displayedProfile?: User;
}

const initialState: ProfileState = {
  isLoading: false,
  error: null,
  displayedProfile: null
};

export const reducer = createReducer<ProfileState>(
  initialState,
  on(ProfileActions.LoadProfile, (state: ProfileState) => ({ ...state, isLoading: true })),
  on(ProfileActions.LoadProfileSuccess, (state: ProfileState, { payload }: { payload: ProfileActions.Payload }) => ({ ...state, isLoading: false, displayedProfile: payload.profile })),
  on(ProfileActions.LoadProfileFailure, (state: ProfileState, { payload }) => ({ ...state,  isLoading: false, error: payload }))
);
