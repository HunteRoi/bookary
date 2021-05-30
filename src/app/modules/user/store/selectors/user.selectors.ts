import { Features } from "../features";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProfileState } from "../reducers/profile.reducer";

const selectProfileFeature = createFeatureSelector<ProfileState>(Features.Profile);
export const selectProfile = createSelector(selectProfileFeature, (state: ProfileState) => state.displayedProfile);
export const selectIsLoading = createSelector(selectProfileFeature, (state: ProfileState) => state.isLoading);
export const selectError = createSelector(selectProfileFeature, (state: ProfileState) => state.error);
