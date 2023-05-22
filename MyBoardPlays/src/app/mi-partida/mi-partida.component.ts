import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-mi-partida',
  templateUrl: './mi-partida.component.html',
  styleUrls: ['./mi-partida.component.css']
})
export class MiPartidaComponent implements OnInit {
  
  participantes: number;
  jugadores: Jugador[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.participantes = Number(params['participantes']);
      this.generarFilas();
    });
  }

  generarFilas() {
    this.jugadores = [];
    for (let i = 0; i < this.participantes; i++) {
      const jugador = {
        nombre: '',
        email: '',
        ganador: false
      };
      this.jugadores.push(jugador);
    }
  }

  agregarJugador() {
    this.jugadores.push({ nombre: '', email: '', ganador: false });
  }
  
}