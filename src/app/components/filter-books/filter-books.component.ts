import { Component, EventEmitter, Output } from '@angular/core';
import { BookFilter } from "../../../models/BookFilter";

@Component({
  selector: 'app-filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.scss']
})
export class FilterBooksComponent {

  @Output() filtered = new EventEmitter<BookFilter>();

  private model:BookFilter = {};

  constructor() { }

  onSubmit() {
    this.filtered.emit(this.model);
  }
}
