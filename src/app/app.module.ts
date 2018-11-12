import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BookListComponent } from './components';
import { GraphQLModule } from './modules/graphql.module';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { FilterBooksComponent } from './components/filter-books/filter-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorListComponent,
    FilterBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
