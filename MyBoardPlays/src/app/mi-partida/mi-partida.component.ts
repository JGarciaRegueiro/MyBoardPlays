import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JuegosService } from '../juegos.service';
import { Juego } from '../juego';
import { Jugador } from '../jugador';
import { ApiService } from '../api.service';
import { Usuario } from '../usuario';
import { Partida } from '../partida';
import { PartidasService } from '../partidas.service';
import swal from 'sweetalert2';



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
  idGanador: number;
  nombre: string;
  puntuacion: number;
  juego:Juego;
  juegos: Juego[];
  jugadores: Jugador[] = [];
  selectedJuego: any;
  usuarios: Usuario[] = [];
  partida:Partida;
  emailGanador:string;


  usuario: any = {
    id: 0,
    nombre: '',
    email: '',
    pass: '',
    fechaAlta: new Date()
  };
  ganadorUsuario: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private juegosServicio: JuegosService,
    private partidasServicio: PartidasService,
    private usuarioServicio: ApiService,
    private router: Router
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
    this.juegosServicio.obtenerListaDeJuegos(this.usuario.id).subscribe((dato) => {
      this.juegos = dato;
    });
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe((dato) => {
      this.usuarios = dato;
    });
  }

  obtenerJuego(){
    this.juegosServicio.obtenerJuegoPorId(this.idJuego).subscribe((dato) => {
      this.juego = dato;
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


  agregarJugador() {
    if (this.selectedJuego && this.jugadores.length < this.selectedJuego.maxJugadores) {
      // Agrega un nuevo jugador al arreglo de jugadores
    this.jugadores.push({ nombre: '', email: '', ganador: false })
    this.participantes=this.participantes + 1;
    }
  }

  guardarPartida(juego: Juego, ganadorEmail: string) {
    this.ganadorUsuario = this.usuarios.find(usuario => usuario.email === ganadorEmail);

    if (this.ganadorUsuario) {
      const partida: Partida = {
        id: 0,
        juego: juego,
        creador: this.usuario.id,
        ubicacion: this.ubicacionPartida,
        fecha: this.fechaEscogida,
        duracion: this.duracion,
        idGanador: this.ganadorUsuario.id
      };

      this.partidasServicio.guardarNuevaPartida(partida).subscribe(
        dato => {
          console.log(partida);
          swal('Partida Actualizada', `La partida ha sido actualizada con éxito`, 'success')
          .then(() => {
            // Redirigir a la lista de partidas
            this.router.navigate(['/lista-partidas']);
          });
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}


