import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JuegosService } from '../juegos.service';
import { Juego } from '../juego';

@Component({
  selector: 'app-mi-partida',
  templateUrl: './mi-partida.component.html',
  styleUrls: ['./mi-partida.component.css']
})
export class MiPartidaComponent implements OnInit {
  participantes: number;
  jugadores: Jugador[] = [];
  fechaActual: string;
  nombreJuego:string;
  creadorPartida: string;
  ubicacionPartida: string;
  fechaEscogida: Date;
  duracion: number;



  nombre: string;
  puntuacion: number;
  juegos: Juego[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private juegosServicio: JuegosService
  ) {}

  ngOnInit() {
    this.fechaActual = new Date().toISOString().split('T')[0]; // Asignar la fecha actual
    this.route.queryParams.subscribe(params => {
      this.participantes = Number(params['participantes']);
      this.generarFilas();
    });
    this.juegosServicio.obtenerListaDeJuegos().subscribe((dato) => {
      this.juegos = dato;
    });
  }

  generarFilas() {
    this.jugadores = [];
    for (let i = 0; i < this.participantes; i++) {
      const jugador: Jugador = {
        nombre: '',
        email: '',
        ganador: false,
        puntuaciones: 0,
        orden: 0,
      };
      this.jugadores.push(jugador);
    }
  }

  agregarJugador() {
    this.jugadores.push({ nombre: '', email: '', ganador: false, puntuaciones: 0, orden: 0 });
  }


  guardarPartida() {
    const partida = {
      nombreJuego: this.nombreJuego,
      creadorPartida: this.creadorPartida,
      ubicacionPartida: this.ubicacionPartida,
      fechaEscogida: this.fechaEscogida,
      duracion: this.duracion,
    };

    this.http.post('/apirest/partida/alta', partida).subscribe(
      (response) => {
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




