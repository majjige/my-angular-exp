import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') userName: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: this.userName,
      title: this.title,
      address: '1234, Main Stm City, State, 100000',
      phone: ['123-123-1234', '456-456-4567']
    };
  }

}
