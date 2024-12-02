import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineDataComponent } from "./components/inline-data/inline-data.component";
import { ToggleIOComponent } from "./components/toggle-i-o/toggle-i-o.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InlineDataComponent, ToggleIOComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Third-Angular-App';
  
}
