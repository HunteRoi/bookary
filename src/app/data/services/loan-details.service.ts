import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoanDetails } from '../models/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {
  private collection: AngularFirestoreCollection<LoanDetails>;
  private loanDetails: Observable<LoanDetails[]>;
  private loanDetailsDoc!: AngularFirestoreDocument<LoanDetails>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<LoanDetails>('loanDetails', ref => ref.orderBy('startDate', 'asc'));
    this.loanDetails = this.collection.snapshotChanges().pipe(map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data() as LoanDetails;
        data.id = change.payload.doc.id;
        return data;
      });
    }));
  }

  getLoanDetails(): Observable<LoanDetails[]> {
    return this.loanDetails;
  }

  getLoanDetailsByBookCode(code: string): Observable<LoanDetails[]> {
    return this.loanDetails.pipe(map(loanDetails => loanDetails.filter(ld => ld.bookCode == code)));
  }

  createLoanDetails(details: LoanDetails) {
    this.collection.add(details);
  }

  updateLoanDetails(details: LoanDetails) {
    this.loanDetailsDoc = this.afs.doc(`loanDetails/${details.id}`);
    this.loanDetailsDoc.update(details);
  }
}
