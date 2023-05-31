import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JuegosService } from '../juegos.service';
import { Juego } from '../juego';
import { Jugador } from '../jugador';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mi-partida',
  templateUrl: './mi-partida.component.html',
  styleUrls: ['./mi-partida.component.css']
})
export class MiPartidaComponent implements OnInit {
  participantes: number;
  fechaActual: string;
  idJuego:number;
  creadorPartida: string;
  ubicacionPartida: string;
  fechaEscogida: Date;
  duracion: number;
  ganador: number;
  nombre: string;
  puntuacion: number;
  juegos: Juego[];
  jugadores: Jugador[] = [];
  selectedJuego: any;

  usuario: any = {
    id: 0,
    nombre: '',
    email: '',
    pass: '',
    fechaAlta: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private juegosServicio: JuegosService,
    private usuarioServicio: ApiService
  ) {}

  ngOnInit() {
    const email=localStorage.getItem('user') || '';
    this.usuarioServicio.consultarUsuario(email).subscribe((user) => {
    this.usuario = user;
    });
      this.route.queryParams.subscribe(params => {
      this.participantes = Number(params['participantes']);
      this.generarFilas();
    });
    this.juegosServicio.obtenerListaDeJuegos().subscribe((dato) => {
      this.juegos = dato;
    });
  }
  isJuegoValido(juego: Juego): boolean {
    return this.participantes >= juego.minParticipantes && this.participantes <= juego.maxParticipantes;
  }
  generarFilas() {
    this.jugadores = [];
    for (let i = 0; i < this.participantes; i++) {
      const jugador= {
        nombre: '',
        email: '',
        ganador: false,
      };
      this.jugadores.push(jugador);
    }
  }

  canAgregarJugador(): boolean {
    return !this.selectedJuego || this.jugadores.length < this.selectedJuego.maxJugadores;
  }

  agregarJugador() {
    if (this.selectedJuego && this.jugadores.length < this.selectedJuego.maxJugadores) {
      // Agrega un nuevo jugador al arreglo de jugadores
    this.jugadores.push({ nombre: '', email: '', ganador: false })
    this.participantes=this.participantes + 1;
    }
  }


guardarPartida() {
  const partida = {
    idJuego: this.idJuego,
    creadorPartida: this.creadorPartida,
    ubicacionPartida: this.ubicacionPartida,
    fechaEscogida: this.fechaEscogida,
    duracion: this.duracion,
    ganador: this.ganador,
  };

    this.http.post('/apirest/partida/alta', partida).subscribe((response) => {
        console.log('Partida guardada correctamente');
        // Aquí puedes realizar alguna acción adicional después de guardar la partida
      },
      (error) => {
        console.error('Error al guardar la partida:', error);
        // Manejo de errores
      }
    );
  }


}




