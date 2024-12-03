import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../model/password.validator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule ,FormsModule ,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  registrationForm! : FormGroup ;
  
  get username(){
      return  this.registrationForm.get('username');
  }
  get password(){
    return this.registrationForm.get('password');
  }

  get confirmPassword(){
    return this.registrationForm.get("confirmPassword");
  }

  constructor (private fb : FormBuilder  ) {
    
  }
  
  ngOnInit() : void{
   this.registrationForm = this.fb.group({
       username : ['', [Validators.required , Validators.minLength(3)]],
       password :[''],
       confirmPassword : ['']
   } , {Validator : passwordValidator});
  
  }


}
