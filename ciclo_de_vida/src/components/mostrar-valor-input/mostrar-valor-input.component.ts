import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'valor-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mostrar-valor-input.component.html',
  styleUrls: ['./mostrar-valor-input.component.scss']
})
export class ValorInputComponent {
  valor: string = '';

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    console.log('Componente mostrar valor input destruido');
  }
}