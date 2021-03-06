import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GraphQL Client';

  menu = [
    { text: 'Books', routerLink: '/book', },
    { text: 'Authors', routerLink: '/author', }
  ]
}
