import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegosService } from '../juegos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { ApiService } from '../api.service';

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
    usuario : any;

    constructor(private juegosServicio: JuegosService, private router:Router, private fb:FormBuilder, private apiService: ApiService,) { }

    ngOnInit(): void {
      const email=localStorage.getItem('user') || '';
      this.apiService.consultarUsuario(email).subscribe((user) => {
      this.usuario = user;
      });
    }

    crearNuevoJuego(){
      this.loading =true;
      this.juegosServicio.guardarNuevoJuego(this.juego, this.usuario).subscribe(dato =>{
        console.log(dato);
        console.log(this.usuario)
        this.irListaJuegos();
        this.loading =false;
      },error => console.log(error));
    }

    irListaJuegos(){
      this.router.navigate(['/lista-juegos']);
    }
   //Spinner
  loading:boolean = false;



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
}
