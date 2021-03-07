import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { MinimalBook, Book } from 'src/app/data/models/Book';
import { User } from 'src/app/data/models/User';
import { EMPTY_STRING } from 'src/app/constants';
import { BookApiService } from 'src/app/services/book-api.service';
import { ApiResponse, ApiBook } from 'src/app/services/book-api.models';

const INITIAL_VALUE = {
  ownerId: EMPTY_STRING,
  ean: EMPTY_STRING,
  title: EMPTY_STRING,
  isbn10: EMPTY_STRING,
  authors: [],
  creators: [],
  editor: EMPTY_STRING,
  image: null,
  pages: null,
  year: null,
  resume: null,
  url: null,
} as MinimalBook;

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  errorMessage: string;
  backingFieldOwnerId: string;
  @Input() addErrorMessage!: string;
  @Input() users!: Observable<User[]>;
  @Output() book: EventEmitter<Book>;

  constructor(
    private builder: FormBuilder,
    private bookApiService: BookApiService,
  ) {
    this.book = new EventEmitter<Book>();
    this.bookForm = this.builder.group({
      ownerId: [EMPTY_STRING, Validators.required],
      ean: [EMPTY_STRING, Validators.required],
      title: [EMPTY_STRING, Validators.required],
      isbn10: [EMPTY_STRING],
      authors: this.builder.array([]),
      creators: this.builder.array([]),
      editor: [EMPTY_STRING, Validators.required],
      image: [EMPTY_STRING],
      pages: [EMPTY_STRING],
      year: [EMPTY_STRING],
      resume: [EMPTY_STRING],
      url: [EMPTY_STRING],
    });
  }

  ngOnInit() {
    this.bookForm.setValue(INITIAL_VALUE);
  }

  onSelected(event: any) {
    const uid = event?.target?.value;
    if (!uid) return;

    this.ownerId!.setValue(uid);
  }

  get ownerId() {
    return this.bookForm.get('ownerId');
  }

  get ean() {
    return this.bookForm.get('ean');
  }

  get title() {
    return this.bookForm.get('title');
  }

  get editor() {
    return this.bookForm.get('editor');
  }

  get authors() {
    return this.bookForm.get('authors') as FormArray;
  }

  get creators() {
    return this.bookForm.get('creators') as FormArray;
  }

  addAuthor() {
    this.authors.push(this.builder.control(EMPTY_STRING));
  }

  addCreator() {
    this.creators.push(
      this.builder.group({
        role: [EMPTY_STRING],
        name: [EMPTY_STRING],
      })
    );
  }

  getCode(code: string) {
    this.bookApiService.getByCode(code).subscribe((apiResponse: ApiResponse) => {
      const dataFound = apiResponse && apiResponse.results && apiResponse.results[code] && apiResponse.results[code].length > 0;
      if (!dataFound) {
        this.errorMessage = 'No book found with this code. Please scan again or enter information manually.';
        return;
      }

      const apiBook = apiResponse.results[code][0] as ApiBook;
      if (apiBook.authors && apiBook.authors.length > this.authors.length) {
        for (let i = 0; i < apiBook.authors.length - this.authors.length; i++) {
          this.addAuthor();
        }
      }
      if (apiBook.creators && apiBook.creators.length > this.creators.length) {
        for (let i = 0; i < apiBook.creators.length - this.creators.length; i++) {
          this.addCreator();
        }
      }

      this.bookForm.patchValue(apiBook);
    });
  }

  submitBook() {
    this.errorMessage = EMPTY_STRING;

    if (this.bookForm.invalid) {
      return;
    }


    this.backingFieldOwnerId = this.ownerId!.value;
    const book = this.bookForm.value as Book;

    book.ownerIds.push(this.backingFieldOwnerId);

    for (let i = book.creators.length - 1; i >= 0; i--) {
      if (book.creators[i].role === EMPTY_STRING && book.creators[i].name === EMPTY_STRING) {
        book.creators!.splice(i, 1);
      }
    }
    book.authors = book.authors.filter((v) => v !== EMPTY_STRING);

    this.book.emit(book);
    this.resetForm();
  }

  resetForm() {
    this.errorMessage = EMPTY_STRING;
    this.authors.controls = [];
    this.creators.controls = [];
    this.bookForm.reset(INITIAL_VALUE);
    this.ownerId!.setValue(this.backingFieldOwnerId);
  }
}
