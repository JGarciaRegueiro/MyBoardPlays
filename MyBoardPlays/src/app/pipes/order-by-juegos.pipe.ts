import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../juego';

@Pipe({
  name: 'orderByJuegos'
})

export class OrderByJuegosPipe implements PipeTransform {

  transform(value: any[], ...args: any[]):Juego[] {
    if(!Array.isArray(value)){
      return value;
    }
  const [property, order = 'asc']: string[] = args;

  if (property === 'id') {
    return value.sort((a, b) => {
      const idA = Number(a[property]);
      const idB = Number(b[property]);
      return order === 'asc' ? idA - idB : idB - idA;
    });
  } else {
    return value.sort((a, b) => {
      const compare = a[property].localeCompare(b[property]);
      return order === 'asc' ? compare : -compare;
    });
  }
  }
}








