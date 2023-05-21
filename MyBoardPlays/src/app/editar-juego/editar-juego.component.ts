import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegosService } from '../juegos.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent implements OnInit {

  id:number;
  juego : Juego = new Juego()
loading: any;

  constructor(private juegoService:JuegosService,private router:Router,private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.juegoService.obtenerJuegoPorId(this.id).subscribe(dato =>{
      this.juego = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/lista-juegos']);
    swal('Juego actualizado',`El juego   ${this.juego.nombre} ha sido actualizado con exito`,`success`);
  }

  get nombre(){
    return this.formJuego.get("nombre") as FormControl;
  }
  get descripcion(){
    return this.formJuego.get("descripcion") as FormControl;
  }
  get minParticipantes(){
    return this.formJuego.get("minParticipantes") as FormControl;
  }
  get maxParticipantes(){
    return this.formJuego.get("maxParticipantes") as FormControl;
  }
  get dificultad(){
    return this.formJuego.get('dificultad') as FormControl;
  }

  formJuego= this.fb.group({
    "nombre" : ['', Validators.required],
    "descripcion" : ['', [Validators.required,Validators.minLength(10)]] ,
    "minParticipantes" : ['', Validators.required],
    "maxParticipantes" : ['', Validators.required],
    "dificultad" : ['', Validators.required],
  });

  onSubmit(){
    this.juegoService.editarJuego(this.id,this.juego).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}




