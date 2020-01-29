import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/_model/joke';

@Component({
  selector: 'app-children-home',
  templateUrl: './children-home.component.html',
  styleUrls: ['./children-home.component.css']
})
export class ChildrenHomeComponent implements OnInit {
  // parent class
  joke: Joke[] = [
    new Joke('Content projection-1', 'Description Content projection-1’'),
    new Joke('Content projection-2', 'Description Content projection-2’')];
  constructor() { }

  ngOnInit() {
  }

}
