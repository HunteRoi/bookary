import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { environment } from './../../environments/environment.prod';
import { ApiResponse } from './book-api.models';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private baseAddress: string;

  constructor(private httpClient: HttpClient) {
    this.baseAddress = `${environment.bookApi.url}/${environment.bookApi.version}/item?key=${environment.bookApi.key}`;
  }

  getByCode(code: string): Observable<ApiResponse> {
    if (!code) {
      return throwError('code is null or empty');
    }

    return this.httpClient.get<ApiResponse>(`${this.baseAddress}&id=${code}`);
  }
}
