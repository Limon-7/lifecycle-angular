import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ToDoService } from '../../to-do.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  constructor(private todoService: ToDoService) {
    console.log('I am from DisplayCardComponent constructor()!!');

  }

  @Input() item: any;
  @Input() odd: boolean;
  @Input() even: boolean;

  @Output() deleteOut = new EventEmitter();
  @Output() editOut = new EventEmitter();

  editItem(item: any) {
    this.editOut.emit(item);
  }

  delectedItem(item: any): void {
    this.deleteOut.emit(item);
  }

  ngOnInit() { }

}
