import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import {TodosService} from "./services/todos.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    TodosService,
  ]
})
export class ApiModule { }
