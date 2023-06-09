import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarJuegoComponent } from './editar-juego/editar-juego.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';
import { IniciarPartidaComponent } from './iniciar-partida/iniciar-partida.component';
import { MiPartidaComponent } from './mi-partida/mi-partida.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByJuegosPipe } from './pipes/order-by-juegos.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { SignupComponent } from './signup/signup.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { SharedDataService } from './shared-data.service';
import { PartidaDetallesComponent } from './partida-detalles/partida-detalles.component';
import { LogoutComponent } from './logout/logout.component';
import { EditarPartidaComponent } from './editar-partida/editar-partida.component';
import { OrderByPartidasPipe } from './pipes/order-by-partidas.pipe';
import { FilterPartidasPipe } from './pipes/filter-partidas.pipe';

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
    ListaPartidasComponent,
    FilterPipe,
    OrderByJuegosPipe,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HerramientasComponent,
    PartidaDetallesComponent,
    EditarPartidaComponent,
    LogoutComponent,
    OrderByPartidasPipe,
    FilterPartidasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [SharedDataService,
    {
      provide:  HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
