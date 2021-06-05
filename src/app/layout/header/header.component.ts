import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppState } from '@core/store/state';
import { Go, Back } from '@core/store/actions/router.actions';
import { UserSelectors } from '@core/store';
import { Login, Logout } from '@core/store/actions/user.actions';
import { UserState } from '@core/store/reducers/user.reducer';
import { PageTitleService } from '@core/services/page-title.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	userState$: Observable<UserState>;

	constructor(
		private store: Store<AppState>,
		private router: Router,
		private pageTitleService: PageTitleService,
	) {	
		this.userState$ = this.store.select(UserSelectors.selectUserState);
	}

	goToBooks(): void {
		this.store.dispatch(Go({ path: ['/books'] }));
	}

	goToHome(): void {
		this.store.dispatch(Go({ path: ['/home'] }));
	}

	goBack(): void {
		this.store.dispatch(Back());
	}

	get title(): string {
		return this.pageTitleService.getTitle();
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
