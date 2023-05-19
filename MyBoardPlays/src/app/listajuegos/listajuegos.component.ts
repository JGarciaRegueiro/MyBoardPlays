import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import swal from 'sweetalert2';
import { Juego } from '../juego';

@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.component.html',
  styleUrls: ['./listajuegos.component.css'],
})
export class ListajuegosComponent implements OnInit {
  pageActual: number = 1;
  juegos: Juego[];

  constructor(private juegosServicio: JuegosService) {}

  filterJuegos: String = '';

  parameter1 = 'nombre';
  parameter2 = 'asc';

  ngOnInit(): void {
    this.juegosServicio.obtenerListaDeJuegos().subscribe((juegos) => {
      this.juegos = juegos;
    });
  }

  //método para conseguir la lista de juegos que nos la proporcionará el servicio
  private obtenerJuegos() {
    this.juegosServicio.obtenerListaDeJuegos().subscribe((dato) => {
      this.juegos = dato;
    });
  }

  editarJuego(id: number) {}

  eliminarJuego(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el juego",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      cancelButtonText: 'Si, elimínalo',
      confirmButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success me-4',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling:true
    }).then((result) => {
      if(!result.value){
    this.juegosServicio.eliminarJuego(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerJuegos();
      swal(
        'Juego eliminado',
        'El juego ha sido eliminado con exito',
        'success'
      )
    })
    }
  })
}
  verDetallesJuego(id: number) {}
}
