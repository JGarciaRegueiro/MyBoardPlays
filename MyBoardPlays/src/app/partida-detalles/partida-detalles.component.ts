import { Component, OnInit } from '@angular/core';
import { Partida } from '../partida';
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
    partida : Partida={ id:0,
    creador: '',
    ubicacion:'',
    fecha:new Date(),
    id_juego:0,
    duracion:0 };

  constructor(private route:ActivatedRoute, private partidaServicio:PartidasService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    /*this.partidaServicio.obtenerPartidaPorId(this.id).subscribe(dato =>{
      this.partida = dato;
    })*/
  }


}
