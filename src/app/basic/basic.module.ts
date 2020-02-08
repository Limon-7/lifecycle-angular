import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicIfSwitchComponent } from './basic-if-switch/basic-if-switch.component';
import { ForComponent } from './for/for.component';
import { NgclassNgstyleComponent } from './ngclass-ngstyle/ngclass-ngstyle.component';



@NgModule({
  declarations: [
    BasicHomeComponent,
    BasicIfSwitchComponent,
    ForComponent,
    NgclassNgstyleComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ],
  exports: [
    BasicHomeComponent,
    BasicIfSwitchComponent,
    ForComponent
  ]
})
export class BasicModule { }
