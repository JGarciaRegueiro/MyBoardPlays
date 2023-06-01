import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPartidas'
})
export class FilterPartidasPipe implements PipeTransform {

  transform(value: any[], arg: any): any[] {
    if (arg === '' || arg.length < 1) {
      return value;
    }

    const durationFilter = Number(arg);
    const searchValue = arg.toLowerCase();

    return value.filter(partida =>
      partida.ubicacion.toLowerCase().includes(searchValue) ||
      partida.duracion === durationFilter ||
      partida.fecha.toString().toLowerCase().includes(searchValue) ||
      partida.creador?.nombre.toLowerCase().includes(searchValue) ||
      partida.juego?.nombre.toLowerCase().includes(searchValue)
    );
  }

}
