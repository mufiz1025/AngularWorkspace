import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  constructor(private _enrollService : EnrollmentService){}
  
  public Topics =['Angular' , 'React' ,'Vue' , 'Dotnet' , 'Django'];

  userModel = new User('mj' , 'jafiz@gmail.com' , 9624628224 , '' , '' , true) ;

  onSubmit(){
    this._enrollService.enroll(this.userModel)
    .subscribe(
      data => console.log('success!', data),
      error => console.error('Error !' ,error)
    );
  }
}
