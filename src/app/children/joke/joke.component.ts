import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/_model/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('joke') data: Joke;
  constructor() { }

  ngOnInit() {
  }

}
