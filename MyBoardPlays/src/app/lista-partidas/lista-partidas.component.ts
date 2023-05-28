import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

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

  partidas:string = ''

  ngOnInit(): void {}

  private obtenerPartidas() {}

  eliminarPartida() {}

  verDetallesPartida() {}

  editarPartida() {}

  exportExcel(): void {
    const data: any[][] = [
      ['ID', 'CREADOR', 'UBICACION', 'FECHA', 'ID JUEGO', 'DURACION'],
      /*
      ...this.partidas.map((partidas) => [
        juego.id,
        juego.nombre,
        juego.descripcion,
        juego.minParticipantes,
        juego.maxParticipantes,
        juego.dificultad,
      ]),
      */
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');

    // Generar el archivo Excel
    XLSX.writeFile(wb, 'lista_partidas.xlsx');
  }
}
