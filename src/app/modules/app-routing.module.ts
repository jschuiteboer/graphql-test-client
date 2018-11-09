import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent, BookListComponent } from "../components";

const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'author-list', component: AuthorListComponent },
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
