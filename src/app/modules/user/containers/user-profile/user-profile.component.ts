import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { ExtendedAppState } from '@modules/user/store/state';
import { LoadProfile } from '@modules/user/store';
import { Observable } from 'rxjs';
import { User } from '@core/models';
import { selectIsLoading, selectError, selectProfile } from '../../store/selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile$: Observable<User>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store<ExtendedAppState>) { 
    this.profile$ = this.store.select(selectProfile);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.store.dispatch(LoadProfile({ uid: params.uid }));
    });
  }
}
