import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {UsersService} from "./shared/api/services/users.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TodosService} from "./shared/api/services/todos.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todo: any = [];
  done: any = [];

  //todo refactor this property in async
  users: any = [];

  //todo add validations to this form: required, min length 3, max length 20
  //todo refactor this control to Reactive Forms
  todoForm = new FormControl('');

  constructor(private userService: UsersService, private todosService: TodosService) {
    //todo Refactor this block as you wish
    //todo Execute these two requests in a single transaction
    this.todosService.getTodos().subscribe((todos: any) => {
      this.splitTodosByStatus(todos);
      //todo Append new data considering the collection already exists and has items. Propose the simplest and fastest option
      this.todo = todos;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users
    });

  }


  splitTodosByStatus(todos: any[]) {
    //todo Refactor this method to better performance and simplicity
    todos.forEach(todo => {
      if (todo.completed) {
        this.done.push(todo);
      } else {
        this.todo.push(todo);
      }
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
