import { Type } from '@angular/core';

import { RouterEffects } from './router.effects';
import { UserEffects } from './user.effects';

const effects: Type<any>[] = [ 
  RouterEffects,
  UserEffects
];

export {
  effects,
  RouterEffects,
  UserEffects
};
