import { Component } from '@angular/core';



import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent ],
  template: `
    <app-header > </app-header>
     <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'First-Angular-App';
}
