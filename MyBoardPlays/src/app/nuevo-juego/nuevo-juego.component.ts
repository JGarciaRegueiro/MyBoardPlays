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

    juego : Juego ={ id:0,
    nombre: '',
    descripcion:'',
    minParticipantes:0,
    maxParticipantes:0,
    dificultad:'' };

    constructor(private juegosServicio: JuegosService, private router:Router, private fb:FormBuilder) { }

    ngOnInit(): void {

    }

    crearNuevoJuego(){
      this.juegosServicio.guardarNuevoJuego(this.juego).subscribe(dato =>{
        console.log(dato);
        this.irListaJuegos();
      },error => console.log(error));
    }

    irListaJuegos(){
      this.router.navigate(['/lista-juegos']);
    }
   //Spinner
  loading = false;



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
    this.crearNuevoJuego();
    console.log(this.formJuego.value);
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
