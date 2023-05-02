import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegosService } from '../juegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.css']
})
export class NuevoJuegoComponent  implements OnInit{

  juego: Juego = new Juego();

  constructor(private juegoServicio:JuegosService, private router:Router){}

  ngOnInit(): void {

  }

  guardarJuego(){
    this.juegoServicio.crearNuevoJuego(this.juego).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeJuego();
    },error => console.error());

  }
  irALaListaDeJuego(){
    this.router.navigate(['/juegos']);
  }
  onSumit(){
    this.guardarJuego();
    console.log(this.juego);
  }

}
