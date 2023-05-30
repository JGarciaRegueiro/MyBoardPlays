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

    return value.filter(partida =>
      partida.ubicacion.toLowerCase().includes(arg) ||
      partida.duracion === durationFilter ||
      partida.fecha.toString().toLowerCase().includes(arg)
    );
  }


}
