import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { UserState } from '@core/store/reducers/user.reducer';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() userState$: Observable<UserState>;
  @Input() small?: boolean = false;
  @Output() login: EventEmitter<void>;
  @Output() logout: EventEmitter<void>;

  constructor() {
    this.login = new EventEmitter();
    this.logout = new EventEmitter();
  }

  onLoginClick() {
    this.login.emit();
  }

  onLogoutClick() {
    this.logout.emit();
  }
}
