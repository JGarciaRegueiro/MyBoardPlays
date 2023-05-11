import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    if(arg === '' || arg.length < 2) return value;
    const resultJuegos =[];
    for(const juegos of value){
      if(juegos.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      juegos.dificultad.toLowerCase().indexOf(arg.toLowerCase()) > -1 || juegos.descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultJuegos.push(juegos);
      };
    };
    return resultJuegos;
  }

}
