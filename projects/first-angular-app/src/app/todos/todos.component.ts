import { catchError } from 'rxjs';
import { TodosService } from '../services/todos.service';
import { TodoItemComponent } from './../components/todo-item/todo-item.component';
import { todo } from './../model/todo.type';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  TodoService = inject(TodosService);

  todoitems  = signal<Array<todo>>([]);

    ngOnInit(): void {

      this.TodoService
        .getTodoFroApi()
        .pipe(
          catchError((err) => { 
            console.log(err);
            throw err;
          })
        )
        .subscribe((todos) =>{
          this.todoitems.set(todos);

        });

    }
}

