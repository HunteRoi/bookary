import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppState } from '@core/store/state';
import { Title } from '@angular/platform-browser';
import { Go, Back } from '@core/store/actions/router.actions';
import { UserSelectors } from '@core/store';
import { Login, Logout } from '@core/store/actions/user.actions';
import { UserState } from '@core/store/reducers/user.reducer';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	userState$: Observable<UserState>;

	constructor(
		private store: Store<AppState>,
		private router: Router,
		private route: ActivatedRoute,
		private titleService: Title,
	) {	
		this.userState$ = this.store.select(UserSelectors.selectUserState);
	}

	ngOnInit(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => {
					const routeTitle = this.route.firstChild?.snapshot.data.title;
					console.debug('activated route', routeTitle);

					const titleServiceTitle = this.titleService.getTitle();
					console.debug('title service', titleServiceTitle);

					return routeTitle ?? titleServiceTitle;
				}),
			)
			.subscribe((title: string) => this.titleService.setTitle(title));
	}

	goToBooks(): void {
		this.store.dispatch(Go({ path: ['/books'] }));
	}

	goToHome(): void {
		this.store.dispatch(Go({ path: ['/'] }));
	}

	goBack(): void {
		this.store.dispatch(Back());
	}

	get title(): string {
		return this.titleService.getTitle();
	}

	get navigation(): string {
		return this.router.url;
	}

	login() {
		this.store.dispatch(Login());
	}

	logout() {
		this.store.dispatch(Logout());
	}
}
