import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

import { Author } from "../../models/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(
    private apollo: Apollo
  ) { }

  public getAuthors(): Observable<Author[]> {
    let query = gql`query listAuthors {
      authors {
        id
        name
      }
    }`;

    return this.apollo.watchQuery({
      query: query,
      // variables: {
      //   filter: bookFilter,
      // }
    })
    .valueChanges.pipe(map((response) => response.data.authors));
  }
}
