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

  juego : Juego ={ id:0,
    nombre: '',
    descripcion:'',
    minParticipantes:0,
    maxParticipantes:0,
    dificultad:'' };

  constructor(private juegoService:JuegosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.juegoService.obtenerJuegoPorId(this.id).subscribe(dato =>{
      this.juego = dato;
    },error => console.log(error));
  }
  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Juego actualizado',`El juego ${this.juego.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.juegoService.editarJuego(this.juego).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}

