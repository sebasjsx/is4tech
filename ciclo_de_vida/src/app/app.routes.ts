import { Routes } from '@angular/router';
import { ValorInputComponent } from '../components/mostrar-valor-input/mostrar-valor-input.component';
import { TemporizadorEntradaComponent } from '../components/temporizador-entrada/temporizador-entrada.component';

export const routes: Routes = [
    {path: 'mostrar-valor', component: ValorInputComponent},
    {path: 'temporizador', component: TemporizadorEntradaComponent}
];
