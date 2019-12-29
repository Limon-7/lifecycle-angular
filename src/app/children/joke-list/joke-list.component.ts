import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, ContentChild } from '@angular/core';

import { JokeComponent } from '../joke/joke.component';
import { Joke } from 'src/app/_model/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[] = [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];
  constructor() { }

  ngOnInit() {
  }

}
