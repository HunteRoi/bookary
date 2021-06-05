import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@core/store/state';
import { UserSelectors } from '@core/store';
import { Login, Logout } from '@core/store/actions/user.actions';
import { UserState } from '@core/store/reducers/user.reducer';
import { PageTitleService } from '@core/services/page-title.service';
import { LanguagesService } from '@core/services/languages.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	userState$: Observable<UserState>;
	@Output() onMenuClick: EventEmitter<void>;

	constructor(
		private store: Store<AppState>,
		private pageTitleService: PageTitleService,
		private languagesService: LanguagesService,
		iconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer
	) {
		this.userState$ = this.store.select(UserSelectors.selectUserState);
		this.onMenuClick = new EventEmitter();

		iconRegistry.addSvgIcon('open-book', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/open-book.svg'));
	}

	clickMenu() {
		this.onMenuClick.emit();
	}

	get title(): string {
		return this.pageTitleService.getTitle();
	}

	login() {
		this.store.dispatch(Login());
	}

	logout() {
		this.store.dispatch(Logout());
	}

	changeLanguage(lang: string) {
		this.languagesService.changeLanguage(lang);
	}
}
