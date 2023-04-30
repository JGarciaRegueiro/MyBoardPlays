import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ErrorGeneralComponent } from './error-general/error-general.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    ErrorGeneralComponent,
    MiCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
