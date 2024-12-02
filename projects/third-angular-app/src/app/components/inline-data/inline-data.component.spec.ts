import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineDataComponent } from './inline-data.component';

describe('InlineDataComponent', () => {
  let component: InlineDataComponent;
  let fixture: ComponentFixture<InlineDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
