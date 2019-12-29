import { Component, OnInit, ViewChild, DoCheck, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-home-todo',
  templateUrl: './home-todo.component.html',
  styleUrls: ['./home-todo.component.css']
})
/* ngOnInit */
/* export class HomeTodoComponent implements OnInit {
  title = 'angular-lifecycle-hooks';

  constructor(private appService: ToDoService) { }

  itemList: string[] = [];
  showDesc = false;

  addItemList(item: any) {
    this.appService.addItems(item);
  }

  deleteItem(item: any) {
    console.log(item);
    this.itemList = this.itemList.filter((itm: any) => itm.id !== item.id);
  }

  enableDescription(event) {
    this.showDesc = event;
  }

  ngOnInit() {

    this.appService.items.subscribe((data: any) => {
      this.itemList.push(data);
      console.log('Home component ngOnInit():' + this.itemList.length);
    });
  }

} */
/* export class HomeTodoComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy { */
export class HomeTodoComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'angular-lifecycle-hooks';

  constructor(private todoService: ToDoService) { }
  itemList: string[] = [];
  showDesc = false;
  showFooter = true;
  numberOfItems = 1;

  @ViewChild('footer', { static: false }) footerComponent: FooterComponent;

  destroy$: Subject<boolean> = new Subject<boolean>();

  /* addItemList(item: any) {
    this.todoService.addItems(item);
    this.numberOfItems = this.itemList.length;
  }

  deleteItem(item: any) {
    console.log(item);
    this.itemList = this.itemList.filter((itm: any) => itm.id !== item.id);
  }

  enableDescription(event) {
    this.showDesc = event;
  }
  ngDoCheck() { }
  ngOnInit() {
    this.todoService.items.pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.itemList.push(data);
      console.log(this.itemList.length);
    });
  } */
  //  ngOnChanges(changes: SimpleChanges) {
  // console.log('app component::::ngOnChanges:');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit:::::app component');
    setTimeout(() => {
      this.footerComponent.numberOfItems = this.itemList.length;
    });
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:::::app component');
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleFooter(evt) {
    this.showFooter = evt;
  }
}

