import { ActionReducerMap } from '@ngrx/store';

import { Features } from '../../features';
import { AppState } from '../state';
import * as fromUser from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
	[Features.User]: fromUser.reducer
};
