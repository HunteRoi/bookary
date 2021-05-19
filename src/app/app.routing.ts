import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
			},
			{
				path: 'books',
				loadChildren: () => import('@modules/book/book.module').then((m) => m.BookModule),
			},
			{
				path: 'users',
				loadChildren: () => import('@modules/user/user.module').then((m) => m.UserModule),
			},
			{
				path: 'error',
				loadChildren: () => import('@modules/error/error.module').then((m) => m.ErrorModule),
			},
		],
	},
	{ path: '**', redirectTo: 'error' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			//enableTracing: true
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
