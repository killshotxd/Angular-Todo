import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {}

  onClick(titleInp: HTMLInputElement) {
    if (titleInp.value) {
      this.TodoService.addTodo(titleInp.value);
      titleInp.value = '';
    }
  }
}
