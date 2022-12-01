import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    this.TodoService.firestoreCollection
      .valueChanges({ idField: 'id' })
      .subscribe((item) => {
        this.todos = item.sort((a: any, b: any) => {
          return a.isDone - b.isDone;
        });
      });
  }

  onClick(titleInp: HTMLInputElement) {
    if (titleInp.value) {
      this.TodoService.addTodo(titleInp.value);
      titleInp.value = '';
    }
  }

  onStatusChange(id: string, newStatus: boolean) {
    this.TodoService.updateTodoStatus(id, newStatus);
  }

  onDelete(id: string) {
    this.TodoService.deleteTodo(id);
  }
}
