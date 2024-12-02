import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from "./components/courses/courses.component";
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { InputFormValidationComponent } from "./components/input-form-validation/input-form-validation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent, FormsModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
    <app-courses>
   
      
  `,
  styles: [],
})
export class AppComponent {
  title = 'Second-Angular-App';
  
}
