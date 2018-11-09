import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import gql from "graphql-tag";

import { Book, BookFilter } from "../../models";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private apollo: Apollo
  ) { }

  public getBooks(bookFilter: BookFilter): Observable<Book[]> {
    let query = gql`query filterBooks($filter: BookFilterInput!) {
      books(filter: $filter) {
        id
        title
        series
        author {
          name
        }
      }
    }`;

    return this.apollo.watchQuery({
      query: query,
      variables: {
        filter: bookFilter,
      }
    })
    .valueChanges.pipe(map((response) => response.data.books));
  }
}
