import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './containers/error/error.component';

const routes: Routes = [
	{
		path: ':code',
		component: ErrorComponent,
		data: { scope: 'error', title: 'title' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ErrorRoutingModule {}
