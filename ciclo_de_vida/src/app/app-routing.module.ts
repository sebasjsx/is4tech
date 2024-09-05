import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorInputComponent } from '../components/mostrar-valor-input/mostrar-valor-input.component';
import { TemporizadorEntradaComponent } from '../components/temporizador-entrada/temporizador-entrada.component';

const routes: Routes = [
  { path: 'valor-input', component: ValorInputComponent },
  { path: 'temporizador-entrada', component: TemporizadorEntradaComponent },
  { path: '', redirectTo: '/valor-input', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
