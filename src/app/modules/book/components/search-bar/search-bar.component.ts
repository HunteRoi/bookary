import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() maxLength?: number | string;
  @Output() onInput: EventEmitter<string>;
  private searchFilter: Subject<string>;
  private subscription: Subscription;

  constructor() {
    this.onInput = new EventEmitter();
    this.searchFilter = new Subject<string>();
  }

  ngOnInit() {
    this.subscription = this.searchFilter.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((filter: string) => this.onInput.emit(filter));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  onKey(event: KeyboardEvent) {
    event.preventDefault();
    const searchFilter = (event.target as HTMLInputElement).value;
    this.searchFilter.next(searchFilter);
  }
}
