import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './containers/homepage/homepage.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomepageComponent,
		data: { scope: 'home', title: 'title' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
