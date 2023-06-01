import { Component } from '@angular/core';
import { Partida } from '../partida';
import { PartidasService } from '../partidas.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { Jugador } from '../jugador';
import { Juego } from '../juego';
import { JuegosService } from '../juegos.service';

@Component({
  selector: 'app-editar-partida',
  templateUrl: './editar-partida.component.html',
  styleUrls: ['./editar-partida.component.css']
})
export class EditarPartidaComponent {
  id:number;
  loading: any;

  participantes: number;
  fechaActual: string;
  idJuego:any;
  creadorPartida: any;
  ubicacionPartida: string;
  fechaEscogida: Date;
  duracion: number;
  ganador: number;
  nombre: string;
  puntuacion: number;
  juego:Juego;
  juegos: Juego[];
  jugadores: Jugador[] = [];
  selectedJuego: any;
  usuarios: Usuario[] = [];
  partida:Partida;

  usuario: any = {
    id: 0,
    nombre: '',
    email: '',
    pass: '',
    fechaAlta: new Date()
  };

  constructor(private partidaService:PartidasService,private router:Router,private route:ActivatedRoute, private juegosServicio:JuegosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.partidaService.obtenerPartidaPorId(this.id).subscribe(dato => {
      this.partida = dato;
      // Asignar los datos de la partida a las variables correspondientes
      this.idJuego = this.partida.juego;
      this.creadorPartida = this.partida.creador?.id;
      this.ubicacionPartida = this.partida.ubicacion;
      this.fechaEscogida = this.partida.fecha;
      this.duracion = this.partida.duracion;
      this.participantes = this.jugadores.length;
    }, error => console.log(error));
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

  irAlaListaDePartidas(){
    this.router.navigate(['/lista-partidas']);
    swal('Partida actualizada',`success`);
  }

  onSubmit(){
    this.partida.juego = this.idJuego;
    this.partida.creador = this.creadorPartida;
    this.partida.ubicacion = this.ubicacionPartida;
    this.partida.fecha = this.fechaEscogida;
    this.partida.duracion = this.duracion;

    this.partidaService.editarPartida(this.id, this.partida).subscribe(dato => {
      this.irAlaListaDePartidas();
    }, error => console.log(error));
  }
}
