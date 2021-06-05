import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, switchMap, map } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class PageTitleService {
	constructor(
		private titleService: Title,
		router: Router,
		route: ActivatedRoute,
		translateService: TranslocoService,
	) {
		router.events.pipe(
			filter((event: Event) => event instanceof NavigationEnd),
			map((event: NavigationEnd) => {
				const child = route.snapshot.firstChild.firstChild;
				const data = child?.data;
				console.log(data);
				const title = data?.title ?? 'title';
				const scope = data?.scope;
				return { title, scope};
			}),
			switchMap(({ title, scope } : { title: string, scope: string}) => translateService.selectTranslate(title, { }, scope))
		).subscribe((title: string) => this.titleService.setTitle(title));
	}

  getTitle(): string {
    return this.titleService.getTitle();
  }
}
