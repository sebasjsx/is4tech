import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerNormalComponent } from './date-picker-normal.component';

describe('DatePickerNormalComponent', () => {
  let component: DatePickerNormalComponent;
  let fixture: ComponentFixture<DatePickerNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
