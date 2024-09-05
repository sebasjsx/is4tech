import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorInputComponent } from './mostrar-valor-input.component';

describe('ValorInputComponent', () => {
  let component: ValorInputComponent;
  let fixture: ComponentFixture<ValorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
