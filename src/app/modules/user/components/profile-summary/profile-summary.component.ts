import { Component, Input } from '@angular/core';
import { User } from '@core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent {
  @Input() profile$: Observable<User>;
}
