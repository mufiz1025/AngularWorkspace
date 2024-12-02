import { inject, Injectable } from '@angular/core';
import {todo} from '../model/todo.type';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);
  
  constructor() { }

  getTodoFroApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<todo>>(url);
  }
}
