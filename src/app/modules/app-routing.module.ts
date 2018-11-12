import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDetailComponent, AuthorListComponent, BookListComponent } from "../components";

const routes: Routes = [
  { path: 'book', component: BookListComponent },

  { path: 'author', component: AuthorListComponent },
  { path: 'author/:id', component: AuthorDetailComponent },

  { path: '', redirectTo: '/book', pathMatch: 'full' },

  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
