import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-detailed',
  templateUrl: './member-detailed.component.html',
  styleUrls: ['./member-detailed.component.css']
})
export class MemberDetailedComponent implements OnInit, OnChanges {

  @ViewChild('taMember', { static: false }) taMember: TabsetComponent;
  data = 100;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(`constructor data is:  ${this.data}`);
  }
  /* Angular component life-cycle hook example*/
  ngOnChanges() {
    this.route.queryParams.subscribe(para => {
      const tab = para['tab'];
      this.taMember.tabs[tab > 0 ? tab : 0].active = true;
    });
    console.log(`ngonchanges data is: ${this.data}`);
  }
  ngOnInit() {
    console.log('nginit data is:' + this.data);
    /* this.route.queryParams.subscribe(para => {
      const tab = para['tab'];
      this.taMember.tabs[tab > 0 ? tab : 0].active = true;
    }); */
  }
  fnAddNumber(): void {
    this.data += 100;
  }
  deleteNumber(): void {
    this.data -= 10;
  }





  selectTab(tabId: number) {
    this.taMember.tabs[tabId].active = true;
    /* this.route.queryParamMap.subscribe(params => {

    }); */
    this.router.navigate(['member'], { queryParams: { tab: tabId } });
  }

}
