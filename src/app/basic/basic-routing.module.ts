import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BasicIfSwitchComponent } from './basic-if-switch/basic-if-switch.component';
import { ForComponent } from './for/for.component';
import { NgclassNgstyleComponent } from './ngclass-ngstyle/ngclass-ngstyle.component';

const basicRoutes: Routes = [
    { path: '', component: BasicHomeComponent },
    { path: 'if', component: BasicIfSwitchComponent },
    { path: 'for', component: ForComponent },
    { path: 'ng-style', component: NgclassNgstyleComponent }
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(basicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BasicRoutingModule { }
