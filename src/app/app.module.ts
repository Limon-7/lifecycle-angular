import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MemberDetailedComponent } from './member-detailed/member-detailed.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeTodoComponent } from './todo/home-todo/home-todo.component';
import { HeaderComponent } from './todo/header/header.component';
import { FooterComponent } from './todo/footer/footer.component';
import { ErrorComponent } from './todo/error/error/error.component';
import { ErrorMessageComponent } from './todo/error/error-message/error-message.component';
import { DisplayCardComponent } from './todo/display/display-card/display-card.component';
import { DisplayListComponent } from './todo/display/display-list/display-list.component';
import { AddItemComponent } from './todo/add-item/add-item.component';
import { ProjectionHomeComponent } from './content-projection/projection-home/projection-home.component';
import { AddButtonComponent } from './content-projection/add-button/add-button.component';
import { ChildrenHomeComponent } from './children/children-home/children-home.component';
import { JokeComponent } from './children/joke/joke.component';
import { JokeListComponent } from './children/joke-list/joke-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicModule } from './basic/basic.module';



@NgModule({
   declarations: [
      AppComponent,
      MemberDetailedComponent,
      MessageComponent,
      HomeTodoComponent,
      HeaderComponent,
      FooterComponent,
      ErrorComponent,
      ErrorMessageComponent,
      DisplayCardComponent,
      DisplayListComponent,
      AddItemComponent,
      ProjectionHomeComponent,
      AddButtonComponent,
      ChildrenHomeComponent,
      JokeComponent,
      JokeListComponent,
      HomeComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      TabsModule.forRoot(),
      ModalModule.forRoot(),
      AppRoutingModule,
      BasicModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
