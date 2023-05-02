import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { ListajuegosComponent } from './listajuegos/listajuegos.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { FormsModule } from '@angular/forms';
import { EditarJuegoComponent } from './editar-juego/editar-juego.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    MisjuegosComponent,
    ListajuegosComponent,
    NuevoJuegoComponent,
    EditarJuegoComponent,
    JuegoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }