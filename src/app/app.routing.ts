import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
		data: { preload: true },
	},
	{
		path: 'books',
		loadChildren: () => import('@modules/book/book.module').then((m) => m.BookModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'users',
		loadChildren: () => import('@modules/user/user.module').then((m) => m.UserModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'error',
		loadChildren: () => import('@modules/error/error.module').then((m) => m.ErrorModule)
	},
	{ path: '', redirectTo: 'home', pathMatch: 'prefix' },
	{ path: '**', redirectTo: 'error' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			//enableTracing: true,
			preloadingStrategy: SelectivePreloadingStrategyService,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
