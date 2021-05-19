import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { AuthService } from '@data/services/auth.service';
import { State } from '@core/store/reducers';
import { Title } from '@angular/platform-browser';
import { Back, Go } from '@core/store/actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(
		public auth: AuthService,
		private store: Store<State>,
		private router: Router,
		private route: ActivatedRoute,
		private titleService: Title,
	) {}

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
		this.store.dispatch(new Go({ path: ['/books'] }));
	}

	goToHome(): void {
		this.store.dispatch(new Go({ path: ['/'] }));
	}

	goBack(): void {
		this.store.dispatch(new Back());
	}

	get title(): string {
		return this.titleService.getTitle();
	}

	get navigation(): string {
		return this.router.url;
	}
}
