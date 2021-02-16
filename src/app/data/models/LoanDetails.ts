import { Timestamp } from '@firebase/firestore-types';

export interface LoanDetails {
  id: string;

  borrowerId: string;
  lenderId: string;
  bookId: string;

  bookCode: string;
  startDate: Timestamp;
  finishDate?: Timestamp;
}
