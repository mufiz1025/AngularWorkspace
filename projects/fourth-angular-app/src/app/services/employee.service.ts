import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../model/employee';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private _url :string = "data/Employee.json";
  constructor( private http :HttpClient) { }

  getEmployees() : Observable<employee[]>{
    return this.http.get<employee[]>(this._url)
    .pipe(catchError((error) => {
      
      // Handle the error and return a new observable with throwError
      
      console.error('Error occurred:', error);
      // Here, we use throwError to manually create an observable that emits an error.
      
      return throwError(() => new Error(error.message));
    })
  );
}
}
