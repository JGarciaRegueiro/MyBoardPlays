import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegosService } from '../juegos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.css']
})
export class NuevoJuegoComponent  implements OnInit{

  constructor( private fb:FormBuilder){}

  get nombre(){
    return this.formJuego.get('nombre') as FormControl;
  }
  get descripcion(){
    return this.formJuego.get('descripcion') as FormControl;
  }
  get minParticipantes(){
    return this.formJuego.get('minParticipantes') as FormControl;
  }
  get maxParticipantes(){
    return this.formJuego.get('maxParticipantes') as FormControl;
  }
  get dificultad(){
    return this.formJuego.get('dificultad') as FormControl;
  }

  formJuego= this.fb.group({
    'nombre' : ['', Validators.required],
    'descripcion' : ['', [Validators.required,Validators.minLength(10)]] ,
    'minParticipantes' : ['', Validators.required],
    'maxParticipantes' : ['', Validators.required],
    'dificultad' : ['', Validators.required],
  });

  onSubmit(){
    console.log(this.formJuego.value);
  }

  ngOnInit(): void {

}

  /*
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
*/
}
