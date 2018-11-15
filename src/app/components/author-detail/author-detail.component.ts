import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { AuthorService } from "../../services/author.service";
import { Author } from "../../../models/Author";

@Component({
  selector: 'app-author',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {

  private author$:Observable<Author>;

  constructor(
    private route: ActivatedRoute,
    private authorService:AuthorService
  ) { }

  ngOnInit() {
    let id:String = this.route.snapshot.params.id

    this.author$ = this.authorService.getAuthor(id);
  }

}
