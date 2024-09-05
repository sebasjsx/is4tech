import { Component, Input, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'temporizador-entrada',
  standalone: true,
  imports: [],
  templateUrl: './temporizador-entrada.component.html',
  styleUrls: ['./temporizador-entrada.component.scss']
})
export class TemporizadorEntradaComponent implements OnInit {
  @Input() valor: string = 'hola';

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log('Valor inicial:', this.valor);

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.valor = 'Adios';
          console.log('Valor actualizado:', this.valor);
        });
      }, 30000);
    });
  }

  ngOnDestroy(): void {
    console.log('Componente temporizador destruido');
  }
}
