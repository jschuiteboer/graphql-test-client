import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { GraphQLModule } from './modules/graphql.module';
import {
  AuthorDetailComponent,
  AuthorListComponent,
  BookListComponent,
  FilterBooksComponent,
  PageNotFoundComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorListComponent,
    FilterBooksComponent,
    AuthorDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
