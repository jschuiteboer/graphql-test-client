import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import gql from "graphql-tag";
import { map } from "rxjs/operators";
import { WatchQueryOptions } from "apollo-client";

import { Author } from "../../models/Author";
import { AuthorFilter } from "../../models/AuthorFilter";

const AUTHORS_QUERY = gql`query listAuthors($filter:AuthorFilterInput) {
  authors(filter: $filter) {
    id
    name
    books {
      title
      series
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(
    private apollo: Apollo
  ) { }

  public getAuthors(filter?:AuthorFilter): Observable<Author[]> {
    let options:WatchQueryOptions = {
      query: AUTHORS_QUERY,
    };

    if(filter != undefined) {
      options.variables = {
        filter: filter,
      }
    }

    return this.apollo.watchQuery(options)
    .valueChanges
      .pipe(map(response => response.data.authors));
  }

  public getAuthor(id: String): Observable<Author> {
    return this.getAuthors({
      id: id,
    })
    .pipe(map<Author[], Author>(response => response[0]));
  }
}
