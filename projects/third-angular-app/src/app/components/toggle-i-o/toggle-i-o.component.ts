import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-toggle-i-o',
  standalone: true,
  imports: [],
  templateUrl: './toggle-i-o.component.html',
  styleUrl: './toggle-i-o.component.scss'
})
export class ToggleIOComponent {
  visible = false;
  @Output() open = new EventEmitter<any>();

  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }

}
}
