import { Component, OnInit } from '@angular/core';
import { Creador, Partida } from '../partida';
import { ActivatedRoute } from '@angular/router';
import { PartidasService } from '../partidas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-juego-detalles',
  templateUrl: './partida-detalles.component.html',
  styleUrls: ['./partida-detalles.component.css']
})
export class PartidaDetallesComponent implements OnInit{

    id:number;
    partida: Partida = {
      id: 0,
      juego: {
        id: 0,
        descripcion: '',
        dificultad: '',
        maxParticipantes: 0,
        minParticipantes: 0,
        nombre: '',
      },
      creador: {
        id: 0,
        email: '',
        fechaAlta: '',
        nombre: '',
        pass: '',
        partidas: []
      },
      ubicacion: '',
      fecha: new Date(),
      duracion: 0,
      ganador: {
        id: 0,
        email: '',
        fechaAlta: new Date(),
        nombre: '',
        pass: '',
      }
    };


  constructor(private route:ActivatedRoute, private partidaServicio:PartidasService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.partidaServicio.obtenerPartidaPorId(this.id).subscribe(dato =>{
      this.partida = dato;
    })
  }


}
