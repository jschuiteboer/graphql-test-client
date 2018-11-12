import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent, BookListComponent } from "../components";

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
