import {
	ActionReducerMap,
	createSelector,
	createFeatureSelector,
	MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env';
import { RouterStateUrl } from '../reducers/router.reducers';

export interface State {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
	routerReducer: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
	? []
	: [];

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
