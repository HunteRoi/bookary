import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoanDetails } from 'src/app/data/models/LoanDetails';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  @Input() loanDetails: Observable<LoanDetails[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
