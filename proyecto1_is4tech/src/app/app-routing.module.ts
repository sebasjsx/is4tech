import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { AdminModule } from './admin/admin.module';
import { DogsComponent } from './admin/dogs/dogs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dogs', component: DogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
