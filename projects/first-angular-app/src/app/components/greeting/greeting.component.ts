import { DetailsService } from './../../services/details.service';

import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeComponent } from "../../home/home.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginInfo } from '../../model/loginInfo';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent  {
  UserName: string = '';  // Variable to bind input data
  password : string ='';

  storedData: any[] = [];  // Store data from the service

   infoServices =inject(DetailsService) ;

  constructor() {}

  addUserInput() {
    if (this.UserName.trim() && this.password.trim()) {  // Ensure input is not empty
      this.infoServices.addData(this.UserName);
      this.infoServices.addData(this.password);
      this.storedData = this.infoServices.getData();
      
      this.UserName ='';
      this.password ='';
    }
   }
}