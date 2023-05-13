import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { IniciarPartidaComponent } from './iniciar-partida/iniciar-partida.component';
import { MiPartidaComponent } from './mi-partida/mi-partida.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'lista-juegos', component: ListajuegosComponent, canActivate: [AuthGuard]},
  {path: 'nuevo-juego',component : NuevoJuegoComponent},
  {path: 'editar-juego/:id',component : NuevoJuegoComponent},
  {path: 'detalles-juego/:id', component:JuegoDetallesComponent},
  {path: 'iniciar-partida/:iniciar', component: IniciarPartidaComponent },
  {path: 'mi-partida', component: MiPartidaComponent },
  {path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
