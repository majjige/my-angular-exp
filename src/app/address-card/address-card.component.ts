import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user = {
    name: 'Foo Bar',
    title: 'Software Developer',
    address: '1234, Main Stm City, State, 100000',
    phone: ['123-123-1234', '456-456-4567']
  };

  constructor() { }

  ngOnInit() {
  }

}
