import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Partida } from '../partida';
import { Router } from '@angular/router';
import { PartidasService } from '../partidas.service';




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

constructor(private partidasServicio: PartidasService, private router: Router) {}
  
ngOnInit(): void {
  this.partidasServicio.obtenerListaDePartidas().subscribe((partidas) => {
    this.partidas = partidas;
  });
}
obtenerPartidas() {
  this.partidasServicio.obtenerListaDePartidas().subscribe((dato) => {
    this.partidas = dato;
  });
}
  eliminarPartida() {}

  verDetallesPartida() {}

  editarPartida(id:number): void {
    this.router.navigate(["editar-partida",id]);
  }

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
