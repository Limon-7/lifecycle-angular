import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-ngclass-ngstyle',
  templateUrl: './ngclass-ngstyle.component.html',
  styleUrls: ['./ngclass-ngstyle.component.css']
})
export class NgclassNgstyleComponent implements OnInit {
  people = [
    { name: 'AMS limon', age: 25, country: 'Bd' },
    { name: 'Tareque Hasan', age: 25, country: 'Bd' },
    { name: 'Dua lipa', age: 27, country: 'Uk' },
    { name: 'Taylor Swift', age: 27, country: 'USA' },
    { name: 'Gigi Hadid', age: 27, country: 'USA' },
    { name: 'Abd Villers', age: 37, country: 'RSA' },

  ];
  constructor() { }

  ngOnInit() {
  }
  getColor(country) {
    switch (country) {
      case 'Bd': {
        return 'green';
      }
      case 'Uk': {
        return 'gray';
      }
      case 'USA': {
        return 'aqua';
      }
      default:
        return 'red';
    }
  }
  getClass(country) {
    switch (country) {
      case 'Bd': {
        return 'class-success';
      }
      case 'Uk': {
        return 'class-danger';
      }
      case 'USA': {
        return 'class-alert';
      }
      default:
        return 'class-primary';
    }
  }
}
