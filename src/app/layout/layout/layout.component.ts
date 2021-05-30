import { Component } from '@angular/core';

import packageInfo from '@package';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	public appVersion: string;

	constructor() {
		this.appVersion = packageInfo.version;
	}
}
