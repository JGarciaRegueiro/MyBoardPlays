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


  constructor(private router: Router, private sharedDataService: SharedDataService) {
  }


  iniciarPartida() {
      // Guarda el número de participantes en el servicio SharedDataService
      this.sharedDataService.setNumParticipantes(this.participantes);
  
      // Navega hacia el componente "MiPartida" y pasa el número de participantes como parámetro
      this.router.navigate(['/mi-partida'], { queryParams: { participantes: this.participantes } });
    
}
}
