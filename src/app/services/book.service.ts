import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import gql from "graphql-tag";
import { WatchQueryOptions } from "apollo-client";

import { BookFilter } from "../../models/BookFilter";
import { Book } from "../../models/Book";


const FILTER_BOOKS_QUERY = gql`query filterBooks($filter: BookFilterInput) {
  books(filter:$filter) {
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

  public getBooks(filter?:BookFilter): Observable<Book[]> {
    let options:WatchQueryOptions = {
      query: FILTER_BOOKS_QUERY,
    };

    if(filter != undefined) {
      options.variables = {
        filter: filter,
      }
    }

    return this.apollo.watchQuery(options)
    .valueChanges
      .pipe(map(response => response.data.books));
  }
}
