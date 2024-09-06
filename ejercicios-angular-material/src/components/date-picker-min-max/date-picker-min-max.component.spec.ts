import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerMinMaxComponent } from './date-picker-min-max.component';

describe('DatePickerMinMaxComponent', () => {
  let component: DatePickerMinMaxComponent;
  let fixture: ComponentFixture<DatePickerMinMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerMinMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
