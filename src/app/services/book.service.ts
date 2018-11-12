import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import gql from "graphql-tag";

import { BookFilter } from "../../models/BookFilter";
import { Book } from "../../models/Book";


const FILTER_BOOKS_QUERY = gql`query filterBooks($filter: BookFilterInput!) {
  books(filter: $filter) {
    id
    title
    series
    author {
      name
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private apollo: Apollo
  ) { }

  public getBooks(bookFilter: BookFilter): Observable<Book[]> {
    return this.apollo.watchQuery({
      query: FILTER_BOOKS_QUERY,
      variables: {
        filter: bookFilter,
      }
    })
    .valueChanges
      .pipe(map(response => response.data.books));
  }
}
