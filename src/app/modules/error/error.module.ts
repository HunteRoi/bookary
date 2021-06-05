import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ErrorRoutingModule } from './error.routing';
import { ErrorComponent } from './containers/error/error.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [ErrorComponent],
	imports: [SharedModule, ErrorRoutingModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'error' }]
})
export class ErrorModule {}
