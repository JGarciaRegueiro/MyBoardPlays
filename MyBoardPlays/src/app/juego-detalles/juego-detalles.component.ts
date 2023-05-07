import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from '../juegos.service';

@Component({
  selector: 'app-juego-detalles',
  templateUrl: './juego-detalles.component.html',
  styleUrls: ['./juego-detalles.component.css']
})
export class JuegoDetallesComponent implements OnInit{

  id:number;
  juego:Juego;

  constructor(private route:ActivatedRoute, private juegoServicio:JuegosService){}

  ngOnInit(): void {

  }


}
