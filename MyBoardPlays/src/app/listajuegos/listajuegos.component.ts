import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { Juego } from '../juego';

@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.component.html',
  styleUrls: ['./listajuegos.component.css']
})
export class ListajuegosComponent implements OnInit{

  juegos:Juego[];

  constructor(private juegosServicio:JuegosService){ }

  ngOnInit():void{

    this.obtenerJuegos(); // llamamos al método para que se ejecute una vez

    //Array de juegos e inicializado los datos para poder añadir ngFor (antes de tener el servicio)
   this.juegos =[
    {
      "id":1,
      "nombre":"Catan",
      "descripcion":"estrategia y hexagonal",
      "minParticipantes":1,
      "maxParticipantes":6,
      "dificultad":"media",
    },
    {
      "id":2,
      "nombre":"Virus",
      "descripcion":"divertido y entretenido",
      "minParticipantes":2,
      "maxParticipantes":7,
      "dificultad":"alta",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    }
    ,
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    }
    ,
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    }
    ,
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    },
    {
      "id":3,
      "nombre":"Dune Imperium",
      "descripcion":"Construcción de mazos con tablero",
      "minParticipantes":1,
      "maxParticipantes":4,
      "dificultad":"media",
    }
   ]

  }


  //método para conseguir la lista de juegos que nos la proporcionará el servicio
  private obtenerJuegos(){
    this.juegosServicio.obtenerListaDeJuegos().subscribe(dato => {
      this.juegos = dato;
    });
   }
   eliminarJuego(id:number){
    this.juegosServicio.eliminarJuego(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerJuegos();
    });
  }

   verDetallesJuego(id:number){

   }

   editarJuego(){

   }
  }
