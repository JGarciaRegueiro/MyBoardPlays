import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-partida',
  templateUrl: './iniciar-partida.component.html',
  styleUrls: ['./iniciar-partida.component.css']
})
export class IniciarPartidaComponent {
participantes: number;

  constructor(private router: Router) { }

  iniciarPartida(): void {
    this.router.navigate(['/partida', this.participantes]);
  }
  
}
