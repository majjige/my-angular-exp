import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string;
  counter = 0;

  constructor(private testService: TestService) {
    setInterval(() => {
      const date = new Date();
      this.message = date.toDateString() + ' ' + date.toLocaleTimeString();
      this.counter++;
      testService.printToConsole('Refreshing the date ' + this.counter);
    }, 1000);

  }

  ngOnInit() {
  }

}
