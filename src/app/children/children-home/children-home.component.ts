import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/_model/joke';

@Component({
  selector: 'app-children-home',
  templateUrl: './children-home.component.html',
  styleUrls: ['./children-home.component.css']
})
export class ChildrenHomeComponent implements OnInit {
  joke: Joke = new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’');
  constructor() { }

  ngOnInit() {
  }

}
