import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MemberDetailedComponent } from './member-detailed/member-detailed.component';
import { HomeTodoComponent } from './todo/home-todo/home-todo.component';
import { ProjectionHomeComponent } from './content-projection/projection-home/projection-home.component';
import { ChildrenHomeComponent } from './children/children-home/children-home.component';
import { CustomPreloadingService } from './core/custom-preloading.service';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'member', component: MemberDetailedComponent },
  { path: 'todo', component: HomeTodoComponent },
  { path: 'projection', component: ProjectionHomeComponent },
  { path: 'view', component: ChildrenHomeComponent },
  { path: 'basic', data: { preload: false }, loadChildren: './basic/basic.module#BasicModule' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
