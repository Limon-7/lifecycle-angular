import { Component, OnInit, Input, EventEmitter, Output, ViewChild, SimpleChanges, OnChanges, DoCheck } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log('I am from DisplayListComponent constructor()!!');
  }
  @Input() itemList: any[];
  @Output() showDescription = new EventEmitter<boolean>();
  @Output() deleteOut = new EventEmitter();
  items: string[];

  modalText = 'Item and Description!!!';
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  ngOnChanges(changes: SimpleChanges) {
    console.log('--app-display-list--ngOnChanges()----');
    console.log('previous values', changes.itemList.previousValue);
    console.log('current values', changes.itemList.currentValue);
    const itemList = changes.itemList.currentValue;
    if (undefined !== itemList) {
      this.items = itemList.map((item) => {
        item.value = `Item: ${item.id}  Name:${item.name} Description: ${item.description}`;
        return item;
      });
    }
  }

  deleteItem(event) {
    console.log(event);
    this.deleteOut.emit(event);
  }

  addDescription() {
    this.showDescription.emit(true);
  }
  ngOnInit() {
    console.log('ngOnInit()=>Display list');
  }
  ngDoCheck() {
    if (this.items !== this.itemList) {
      this.items = this.itemList.map((item) => {
        item.value = `Item: ${item.id}  Name:${item.name} Description: ${item.description}`;
        return item;
      });
    }
    // console.log('ngDoCheck', this.itemList);
  }
  editItem(item: any) {
    // console.log(item);
    this.editModal.show();
  }

  closeModal() {
    this.editModal.hide();
  }

  openModal() {
  }
}
