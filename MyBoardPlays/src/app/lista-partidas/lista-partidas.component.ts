import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-partidas',
  templateUrl: './lista-partidas.component.html',
  styleUrls: ['./lista-partidas.component.css']
})
export class ListaPartidasComponent implements OnInit{

  pageActual:number =1;
 ngOnInit(): void {

 }

  private obtenerPartidas(){


   }

  eliminarPartida(id:number){

  }

   verDetallesPartida(id:number){

   }

   editarPartida(){

   }
}
