import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Author } from "../../../models/Author";

import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  private authors$: Observable<Author[]>;

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
  }

}
