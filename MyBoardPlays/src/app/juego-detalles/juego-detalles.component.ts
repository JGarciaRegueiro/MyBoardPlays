import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from '../juegos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-juego-detalles',
  templateUrl: './juego-detalles.component.html',
  styleUrls: ['./juego-detalles.component.css']
})
export class JuegoDetallesComponent implements OnInit{

  id:number;
  juego : Juego ={ id:0,
    nombre: '',
    descripcion:'',
    minParticipantes:0,
    maxParticipantes:0,
    dificultad:'' };

  constructor(private route:ActivatedRoute, private juegoServicio:JuegosService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.juegoServicio.obtenerJuegoPorId(this.id).subscribe(dato =>{
      this.juego = dato;
    })
  }


}
