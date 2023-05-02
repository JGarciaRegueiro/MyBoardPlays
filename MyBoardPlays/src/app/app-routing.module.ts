import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';

const routes: Routes = [
  {path: 'mis-juegos', component:MisjuegosComponent},
  {path: 'juegos', component: ListajuegosComponent},
  {path : 'nuevo-juego',component : NuevoJuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
