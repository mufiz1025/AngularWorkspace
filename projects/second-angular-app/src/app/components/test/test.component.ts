import { Component } from '@angular/core';
import { InputFormValidationComponent } from "../input-form-validation/input-form-validation.component";
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [InputFormValidationComponent],
  template: `
    <app-input-form-validation>
  `,
  styleUrl: './test.component.scss'
})
export class TestComponent {

 eemail ="me@example.com";

 onKeyUp(){
     console.log(this.eemail);
 }
  

}
