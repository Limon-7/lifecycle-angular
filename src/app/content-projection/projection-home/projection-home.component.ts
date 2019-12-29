import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection-home',
  templateUrl: './projection-home.component.html',
  styleUrls: ['./projection-home.component.css']
})
export class ProjectionHomeComponent implements OnInit {
  btnText = 'Click Me';
  title = '.....Ng Projection.....';
  constructor() {
    console.log('onstructor of projection:::');
  }

  ngOnInit() {
    this.btnText = 'add me';
  }

}
