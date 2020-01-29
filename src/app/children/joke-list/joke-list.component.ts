import {
  Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList,
  ContentChild,ContentChildren, AfterViewInit, AfterContentInit
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
  // search inside this component’s template, its view, for this child component.
  @ViewChild(JokeComponent, { static: false }) jokeViewChild: JokeComponent;
  // We use the @ViewChildren decorator which matches all JokeComponent`s and stores them in a `QueryList called jokeViewChildren.
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  // content give to child jokelist componet from host childrehomecomponent.
  // simply ContentChild applied to child component where the content are projected.
  @ContentChild(JokeComponent, { static: false }) contentChild: JokeComponent;

  @ContentChildren(JokeComponent) contentChildren:QueryList<JokeComponent>;
  /* templete reference variable */
  @ViewChild('templetejokechild', { static: false }) templetejokechild: JokeComponent;
  /* A wrapper around a native element inside of a View.
 */
  // html templete reference variable and a low-level reference
  @ViewChild('header', { static: false }) templeteReference: ElementRef;

  /* Constructor viewchild undefined that is because by the time the constructor is called we haven’t render the children yet.
 */
  constructor() {
    console.log(`constructor:::ViewChild:${this.jokeViewChild}`);
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(`ContentChild() applied to child component:::${this.contentChild}`, this.contentChild);
    const joke: JokeComponent[] = this.contentChildren.toArray();
     console.log(`ContentChildren() applied to child component:::${joke}`, joke);
  }
  /* If we interact with viewchild references in our component we need to do that in the ngAfterViewInit function.
 */
  ngAfterViewInit() {
    console.log('ViewChild or ViewChildren applied to parent component');
    console.log(`JokeViewChild with Templete reference variable:${this.templetejokechild}`, this.templetejokechild);
    console.log(`JokeViewChild:${this.jokeViewChild}`, this.jokeViewChild);
    const joke: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log('ViewChildren():::', joke);
    console.log(`JokeViewChild with template variable is an ElementRef::${this.templeteReference}`, this.templeteReference);
    this.templeteReference.nativeElement.textContent = 'Using templeReferce to View Children';
  }
}
