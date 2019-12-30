import {
  Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList,
  ContentChild, AfterViewInit, AfterContentInit
} from '@angular/core';

import { Joke } from 'src/app/_model/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
  jokes: Joke[] = [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];
  @ViewChild(JokeComponent, { static: false }) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ContentChild(JokeComponent, { static: false }) contentChild: JokeComponent;
  /* templete reference variable */
  // @ViewChild('jokechild', { static: false }) jokecomponet: JokeComponent;
  /* A wrapper around a native element inside of a View.
 */
  @ViewChild('header', { static: false }) templeteReference: ElementRef;

  /* Constructor viewchild undefined that is because by the time the constructor is called we haven’t render the children yet.
 */
  constructor() {
    console.log(`constructor:::ViewChild:${this.jokeViewChild}`);
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(`ContentChild():::${this.contentChild}`, this.contentChild);
  }
  /* If we interact with viewchild references in our component we need to do that in the ngAfterViewInit function.
 */
  ngAfterViewInit() {
    console.log(`JokeViewChild:${this.jokeViewChild}`, this.jokeViewChild);
    const joke: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log('ViewChildren():::', joke);
    console.log(`ngAfterViewInit():::${this.templeteReference}`, this.templeteReference);
    this.templeteReference.nativeElement.textContent = 'Using templeReferce to View Children';
  }
}
