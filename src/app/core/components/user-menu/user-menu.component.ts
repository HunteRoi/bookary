import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { UserState } from '@core/store/reducers/user.reducer';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  @Input() userState$: Observable<UserState>;

  @Output() login: EventEmitter<void>;
  @Output() logout: EventEmitter<void>;
  @Output() langChange: EventEmitter<string>;

  constructor() {
    this.login = new EventEmitter();
    this.logout = new EventEmitter();
    this.langChange = new EventEmitter();
  }

  onLoginClick() {
    this.login.emit();
  }

  onLogoutClick() {
    this.logout.emit();
  }

  onLangSelection(lang: string) {
    this.langChange.emit(lang);
  }
}
