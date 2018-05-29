import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // String Type
  str: string;
  anotherStr;
  yetAnotherStr;
  // str: string = 4 //Error

  ngOnInit() {
    this.str = 'this is a string';
    this.anotherStr = 'this is another string';
    this.anotherStr = 4;
    this.yetAnotherStr = 'Another string';
    this.yetAnotherStr = 4;
    this.test();
  }


  test() {
    let name: string = 'Test User';
    let age: number = 30;
    let text: string = `My name is ${name} and I am ${age} years old`;
    console.log(text);

    this.numberArrayInput([]);
    this.numberArrayInput([5]);
    this.numberArrayInput([5, 10, 15]);
    // this.numberArrayInput(['string', 5]); doesn't work

    this.anyArrayInput([]);
    this.anyArrayInput([5]);
    this.anyArrayInput([5, 10, 15]);
    this.anyArrayInput(['string', 5]);
  }

  numberArrayInput(x: number[]) {
    console.log(x);
  }

  anyArrayInput(x: Array<any>) {
    console.log(x);
  }

}
