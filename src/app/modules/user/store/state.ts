import { Features } from './features';
import * as fromRoot from '@core/store';
import { ProfileState } from './reducers';

export interface ExtendedAppState extends fromRoot.AppState {
  [Features.Profile]?: ProfileState
}