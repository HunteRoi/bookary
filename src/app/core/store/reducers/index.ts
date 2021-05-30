import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { Features } from '../../features';
import { AppState } from '../state';
import * as fromUser from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
	[Features.Router]: fromRouter.routerReducer,
	[Features.User]: fromUser.reducer
};
