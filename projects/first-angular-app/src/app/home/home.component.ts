import { Component, EventEmitter, Output, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CoursesComponent } from "../../../../second-angular-app/src/app/components/courses/courses.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  template: `
  <h2> home works !</h2>
  <app-greeting/>
   
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
}
