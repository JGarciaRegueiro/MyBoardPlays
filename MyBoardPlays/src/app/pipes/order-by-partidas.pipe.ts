import { Pipe, PipeTransform } from '@angular/core';
import { Partida } from '../partida';

@Pipe({
  name: 'orderByPartidas'
})
export class OrderByPartidasPipe implements PipeTransform {

  transform(value: any[], property: string, order: string): Partida[] {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.sort((a, b) => {
      let valueA = a[property];
      let valueB = b[property];

      if (property === 'id' || property === 'duracion') {
        valueA = Number(valueA);
        valueB = Number(valueB);
      } else if (property === 'fecha') {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      } else if (property === 'creador' || property === 'juego' || property === 'ganador') {
        valueA = a[property]?.nombre?.toLowerCase();
        valueB = b[property]?.nombre?.toLowerCase();
      }

      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
