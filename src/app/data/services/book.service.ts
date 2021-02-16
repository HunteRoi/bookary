import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private collection: AngularFirestoreCollection<Book>;
  private books: Observable<Book[]>;
  private bookDoc!: AngularFirestoreDocument<Book>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<Book>('books', ref => ref.orderBy('title', 'asc'));
    this.books = this.collection.snapshotChanges().pipe(map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data() as Book;
        data.id = change.payload.doc.id;
        return data;
      });
    }));
  }

  getBookByCode(ean: string): Observable<Book> {
    return this.books.pipe(
      map(books => {
        const book = books.find(b => b.ean === ean);
        if (!book) throwError(`Book identified ${ean} does not exist`);

        return book as Book;
      }),
      catchError(err => throwError(err))
    );
  }

  getBooks(): Observable<Book[]> {
    return this.books;
  }

  async createBookForOwner(book: Book, ownerId: string) {
    const ref = await this.collection.ref
      .where('ean', '==', book.ean)
      .where('ownerIds', 'array-contains', ownerId)
      .get();

    if (ref.size < 1) {
      if (!book.ownerIds.includes(ownerId)) book.ownerIds.push(ownerId);

      this.collection.add(book);
    } else {
      throw new Error(`The book with the id ${book.ean} already exists for the user with the id ${ownerId}`);
    }
  }

  updateBook(book: Book) {
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    this.bookDoc.update(book);
  }
}
