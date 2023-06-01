import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { IniciarPartidaComponent } from './iniciar-partida/iniciar-partida.component';
import { MiPartidaComponent } from './mi-partida/mi-partida.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';
import { PartidaDetallesComponent } from './partida-detalles/partida-detalles.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ErrorGeneralComponent } from './error-general/error-general.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { EditarJuegoComponent } from './editar-juego/editar-juego.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { LogoutComponent } from './logout/logout.component';
import { EditarPartidaComponent } from './editar-partida/editar-partida.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'lista-juegos', component: ListajuegosComponent, canActivate: [AuthGuard]},
  {path: 'nuevo-juego',component : NuevoJuegoComponent},
  {path: 'editar-juego/:id',component : EditarJuegoComponent},
  {path: 'detalles-juego/:id', component:JuegoDetallesComponent},
  {path: 'detalles-partida/:id', component:PartidaDetallesComponent},
  {path: 'iniciar-partida', component: IniciarPartidaComponent },
  {path: 'mi-partida', component: MiPartidaComponent },
  {path: 'acerca-de', component: AcercaDeComponent },
  {path: 'error-general', component: ErrorGeneralComponent },
  {path: 'herramientas', component: HerramientasComponent},
  {path: 'mi-cuenta', component: MiCuentaComponent},
  {path: '', component: HomeComponent },
  {path: 'lista-partidas', component: ListaPartidasComponent},
  {path: 'juegos', component: MisjuegosComponent},
  {path: 'logout', component: LogoutComponent},
  {path : 'editar-partida/:id', component:EditarPartidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
