import { Routes } from '@angular/router';

import { MessageComponent } from '../message/message.component';
import { MemberDetailedComponent } from '../member-detailed/member-detailed.component';
import { HomeTodoComponent } from '../todo/home-todo/home-todo.component';
import { ProjectionHomeComponent } from '../content-projection/projection-home/projection-home.component';
import { ChildrenHomeComponent } from '../children/children-home/children-home.component';
import { HomeHttpComponent } from '../http/home-http/home-http.component';

export const appRoutes: Routes = [
    { path: '', component: HomeTodoComponent },
    { path: 'message', component: MessageComponent },
    { path: 'member', component: MemberDetailedComponent },
    { path: 'todo', component: HomeTodoComponent },
    { path: 'projection', component: ProjectionHomeComponent },
    { path: 'view', component: ChildrenHomeComponent },
    { path: 'http', component: HomeHttpComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
