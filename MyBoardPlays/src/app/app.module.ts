import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ErrorGeneralComponent } from './error-general/error-general.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarJuegoComponent } from './editar-juego/editar-juego.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';
import { IniciarPartidaComponent } from './iniciar-partida/iniciar-partida.component';
import { MiPartidaComponent } from './mi-partida/mi-partida.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    ErrorGeneralComponent,
    MiCuentaComponent,
    MisjuegosComponent,
    ListajuegosComponent,
    NuevoJuegoComponent,
    EditarJuegoComponent,
    JuegoDetallesComponent,
    IniciarPartidaComponent,
    MiPartidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
