import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My angular Experiments';

  user: User;
  constructor() {
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.title = 'Software Engineer';
    this.user.address = '1000 Street, City, State';
    this.user.phone = [
      '111-111-1111',
      '222-222-2222'
    ];
  }

}
