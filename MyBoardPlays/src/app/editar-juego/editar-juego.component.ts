import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from '../juegos.service';

@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent implements OnInit {


  ngOnInit():void{

  }
}
