import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import swal from 'sweetalert2';
import { Juego } from '../juego';
import { catchError, of, tap } from 'rxjs';

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
    this.juegosServicio.eliminarJuego(id)
    .pipe(
      tap(() => this.ngOnInit()),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    )
    .subscribe();
}

  verDetallesJuego(id: number) {}
}
