import { Component, Input } from '@angular/core';
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() auth: AuthService;
}
