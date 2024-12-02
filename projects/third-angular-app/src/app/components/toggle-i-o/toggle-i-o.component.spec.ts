import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIOComponent } from './toggle-i-o.component';

describe('ToggleIOComponent', () => {
  let component: ToggleIOComponent;
  let fixture: ComponentFixture<ToggleIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleIOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
