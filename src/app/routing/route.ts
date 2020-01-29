import { Routes } from '@angular/router';

import { MessageComponent } from '../message/message.component';
import { MemberDetailedComponent } from '../member-detailed/member-detailed.component';
import { HomeTodoComponent } from '../todo/home-todo/home-todo.component';
import { ProjectionHomeComponent } from '../content-projection/projection-home/projection-home.component';
import { ChildrenHomeComponent } from '../children/children-home/children-home.component';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'message', component: MessageComponent },
    { path: 'member', component: MemberDetailedComponent },
    { path: 'todo', component: HomeTodoComponent },
    { path: 'projection', component: ProjectionHomeComponent },
    { path: 'view', component: ChildrenHomeComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
