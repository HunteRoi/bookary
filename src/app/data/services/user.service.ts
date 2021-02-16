import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<User>('users', (ref) => ref.orderBy('displayName', 'asc'));
    this.users = this.collection.snapshotChanges().pipe(map((changes) => changes.map((change) => change.payload.doc.data() as User)));
  }

  getUsers(): Observable<User[]> {
    return this.users;
  }

  getUserById(uid: string): AngularFirestoreDocument<User> {
    return this.collection.doc<User>(uid);
  }
}
