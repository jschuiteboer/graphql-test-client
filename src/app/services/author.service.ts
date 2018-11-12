import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

import { Author } from "../../models/Author";

const AUTHORS_QUERY = gql`query listAuthors {
  authors {
    id
    name
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(
    private apollo: Apollo
  ) { }

  public getAuthors(): Observable<Author[]> {
    return this.apollo.watchQuery({
      query: AUTHORS_QUERY,
    })
    .valueChanges
      .pipe(map(response => response.data.authors));
  }
}
