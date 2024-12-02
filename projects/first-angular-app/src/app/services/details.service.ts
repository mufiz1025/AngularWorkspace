
import { Injectable, WritableSignal } from '@angular/core';
import { LoginInfo } from '../model/loginInfo';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
   
  private infoItems: any[] = []; 
  
  constructor() { }

  addData(item: any) {
    this.infoItems.push(item);  // Add data to the array
  }

  getData() {
    return this.infoItems;  // Retrieve stored data
  }

}
