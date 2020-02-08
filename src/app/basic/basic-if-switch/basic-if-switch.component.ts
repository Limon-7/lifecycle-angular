import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-if-switch',
  templateUrl: './basic-if-switch.component.html',
  styleUrls: ['./basic-if-switch.component.css']
})
export class BasicIfSwitchComponent implements OnInit {
  course = [1, 2];
  viewMode = '';
  people = [
    { name: 'Ams limon', age: 25, country: 'Bd' },
    { name: 'Tareque Hasan', age: 25, country: 'Bd' },
    { name: 'Dua lipa', age: 27, country: 'Uk' },
    { name: 'Taylor Swift', age: 27, country: 'USA' },
    { name: 'Gigi Hadid', age: 27, country: 'USA' },
    { name: 'Abd Villers', age: 37, country: 'RSA' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
