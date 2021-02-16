import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

import { UpdateService } from './../../services/update.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private updateService: UpdateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() =>
          this.activatedRoute.firstChild?.snapshot.data['title'] ?? this.titleService.getTitle()
        )
      )
      .subscribe((routerTitle: string) =>
        this.titleService.setTitle(routerTitle)
      );
  }

  checkForUpdate() {
    this.updateService.checkForUpdates();
  }

  navigateTo(...path: string[]) {
    this.router.navigate(path);
  }

  goBack() {
    this.location.back();
  }

  get navigation(): string {
    return this.router.url;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
