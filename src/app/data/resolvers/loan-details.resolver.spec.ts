import { TestBed } from '@angular/core/testing';

import { LoanDetailsResolver } from './loan-details.resolver';

describe('LoanDetailsResolver', () => {
  let resolver: LoanDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoanDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
