import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Book } from "../../models/Book";
import { BookService } from "../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  private books$: Observable<Book[]>;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks({});
  }

}
