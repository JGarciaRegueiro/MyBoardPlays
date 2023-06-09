import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Partida } from '../partida';
import { Router } from '@angular/router';
import { PartidasService } from '../partidas.service';
import swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-lista-partidas',
  templateUrl: './lista-partidas.component.html',
  styleUrls: ['./lista-partidas.component.css'],
})
export class ListaPartidasComponent implements OnInit {
  pageActual: number = 1;
  parameter1 = 'id';
  parameter2 = 'asc';
  filterPartidas: String = '';
  partidas: Partida[];
  usuario:any;

  constructor(
    private partidasServicio: PartidasService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const email=localStorage.getItem('user') || '';

    this.apiService.consultarUsuario(email).subscribe((user) => {
      this.usuario = user;
      console.log(this.usuario);
    })

    this.partidasServicio.obtenerListaDePartidas(this.usuario.id).subscribe((partidas) => {
      this.partidas = partidas;
    });
  }

  obtenerPartidas() {
    this.partidasServicio.obtenerListaDePartidas(this.usuario.id).subscribe((dato) => {
      this.partidas = dato;
    });
  }
  eliminarPartida(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la partida',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Si, elimínala',
      confirmButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success me-4',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (!result.value) {
        this.partidasServicio.eliminarPartida(id, this.usuario).subscribe((dato) => {
          console.log(this.usuario);
          swal(
            'Partida eliminada',
            'La partida ha sido eliminada con exito',
            'success'
          )
          .then(() => {
            // Redirigir a la lista de partidas
            this.router.navigate(['/lista-partidas']);
          });
        });
      }
    });
  }

  verDetallesPartida(id:number) {}

  editarPartida(id: number): void {
    this.router.navigate(['editar-partida', id]);
  }

  exportExcel(): void {

    const data: any[][] = [
      ['ID', 'CREADOR', 'UBICACION', 'FECHA', 'JUEGO', 'DURACION', 'GANADOR'],
      ...this.getDatosExportar(),
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');

    // Generar el archivo Excel
    XLSX.writeFile(wb, 'lista_partidas.xlsx');
  }
  getDatosExportar(): any[][] {
    return this.usuario.partidas.map((partida: { id: any; creador: { nombre: any; }; ubicacion: any; fecha: any; juego: { nombre: any; }; duracion: any; idGanador: { nombre: any; }; }) => [
      partida.id,
      partida.creador?.nombre,
      partida.ubicacion,
      partida.fecha,
      partida.juego?.nombre,
      partida.duracion,
      partida.idGanador.nombre
    ]);
  }
}
