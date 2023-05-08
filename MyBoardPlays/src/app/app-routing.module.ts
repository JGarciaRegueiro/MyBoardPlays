import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { IniciarPartidaComponent } from './iniciar-partida/iniciar-partida.component';
import { MiPartidaComponent } from './mi-partida/mi-partida.component';

const routes: Routes = [
  {path: 'lista-juegos', component: ListajuegosComponent},
  {path : 'nuevo-juego',component : NuevoJuegoComponent},
  { path: '', component: IniciarPartidaComponent },
  { path: 'partida/:participantes', component: MiPartidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
