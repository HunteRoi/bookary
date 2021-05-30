import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

const RouterActionTypes = {
	Go: '[Router] Go',
	Back: '[Router] Back',
	Forward: '[Router] Forward'
}

type Payload = { path: any[], query?: object, extras?: NavigationExtras };

export const Go = createAction(RouterActionTypes.Go, props<Payload>());
export const Back = createAction(RouterActionTypes.Back);
export const Forward = createAction(RouterActionTypes.Forward);
