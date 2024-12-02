import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormValidationComponent } from './input-form-validation.component';

describe('InputFormValidationComponent', () => {
  let component: InputFormValidationComponent;
  let fixture: ComponentFixture<InputFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
