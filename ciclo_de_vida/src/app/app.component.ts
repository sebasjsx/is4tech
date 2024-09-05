import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ValorInputComponent } from '../components/mostrar-valor-input/mostrar-valor-input.component';
import { TemporizadorEntradaComponent } from '../components/temporizador-entrada/temporizador-entrada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ciclo_de_vida';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
