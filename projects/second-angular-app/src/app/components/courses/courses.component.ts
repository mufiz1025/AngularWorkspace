
import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, TestComponent],
  template: `
   <app-test />
    
  `,
  styles: ``
})

export class CoursesComponent {
  email = 'jafiz@gmail.com';

  onKeyUp(){
        console.log(this.email);
  }
}
 