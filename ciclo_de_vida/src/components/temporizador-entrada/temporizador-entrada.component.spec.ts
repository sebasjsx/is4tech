import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporizadorEntradaComponent } from './temporizador-entrada.component';

describe('TemporizadorEntradaComponent', () => {
  let component: TemporizadorEntradaComponent;
  let fixture: ComponentFixture<TemporizadorEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporizadorEntradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporizadorEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
