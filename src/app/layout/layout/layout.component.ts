import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import packageInfo from '@package';
import { AppState } from '@core/store/state';
import { UserSelectors } from '@core/store';

type MenuItem = {
	icon: string;
	title: string;
	path: string;
	mustBeAuthenticated?: boolean;
};

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	isAuthenticated$: Observable<boolean>;
	appVersion: string;
	mode: MatDrawerMode;
	isSidenavOpened: boolean;
	menuItems: MenuItem[];

	constructor(
		private store: Store<AppState>,
		private mediaObserver: MediaObserver,
	) {
		this.isAuthenticated$ = this.store.select(UserSelectors.selectIsAuthenticated);
		this.appVersion = packageInfo.version;
		this.menuItems = [
			{
				icon: 'home',
				title: 'header.home',
				path: '/home',
			},
			{
				icon: 'menu_book',
				title: 'header.books',
				path: '/books',
				mustBeAuthenticated: true,
			},
		];

		this.mediaObserver
			.asObservable()
			.pipe(
				filter((changes) => changes.length > 0),
				map((changes) => changes[0]),
			)
			.subscribe((change) => {
				const isSmallDevice =
					change.mqAlias === 'sm' || change.mqAlias === 'xs';
				this.isSidenavOpened = !isSmallDevice;
				this.mode = isSmallDevice ? 'over' : 'side';
			});
	}

	toggleSidenav() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}
}
