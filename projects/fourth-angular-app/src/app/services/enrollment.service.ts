import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
 
  _url ='';
  constructor(private _http :HttpClient ) { }

  enroll(user : User){
   return this._http.post<any>(this._url , user);
  }
}
