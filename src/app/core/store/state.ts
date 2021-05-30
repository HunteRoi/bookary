import * as fromRouter from '@ngrx/router-store';

import { Features } from "../features";
import { UserState } from "./reducers/user.reducer";
import { RouterStateUrl } from './reducers/router.reducer';

export interface AppState {
  [Features.User]: UserState,
  [Features.Router]: fromRouter.RouterReducerState<RouterStateUrl>;
}
