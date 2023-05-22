import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-iniciar-partida',
  templateUrl: './iniciar-partida.component.html',
  styleUrls: ['./iniciar-partida.component.css']
})
export class IniciarPartidaComponent {
  participantes: number;
  emails: string[];

  constructor(private router: Router) {
    this.emails = [];
  }

  agregarCampoEmail() {
    this.emails.push('');
  }

  iniciarPartida() {
    // Navega hacia el componente "MiPartida" y pasa el número de participantes como parámetro
    this.router.navigate(['/mi-partida'], { queryParams: { participantes: this.participantes } });
  }
}

