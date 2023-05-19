import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {
  num_dados: number;
  num_caras: number;
  resultados: number[];
  sumaTotal: number;
  numParticipantes : number;
  numPremiado: number;
  horas: number;
  minutos: number;
  segundos: number;
  tiempo: string;
  intervalo: any;


  lanzarDados() {
    let resultados = [];
    for (let i = 0; i < this.num_dados; i++) {
      let resultado = Math.floor(Math.random() * this.num_caras) + 1;
      resultados.push(resultado);
    }
    return resultados;
  }

  ejecutarLanzamiento() {
    this.resultados = this.lanzarDados();
    this.sumaTotal = this.resultados.reduce((a, b) => a + b, 0);
  }

  ejecutarGiro() {
    this.numPremiado = Math.floor(Math.random() * this.numParticipantes) + 1;
    }

    constructor() {
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
      this.tiempo = '';
      this.intervalo = null;
    }

    iniciarCronometro() {
      if (this.intervalo) {
        clearInterval(this.intervalo);
      }

      this.intervalo = setInterval(() => {
        this.actualizarTiempo();
      }, 1000);
    }

    actualizarTiempo() {
      if (this.segundos < 59) {
        this.segundos++;
      } else {
        this.segundos = 0;
        if (this.minutos < 59) {
          this.minutos++;
        } else {
          this.minutos = 0;
          this.horas++;
        }
      }

      this.tiempo = `${this.horas.toString().padStart(2, '0')}:
                     ${this.minutos.toString().padStart(2, '0')}:
                     ${this.segundos.toString().padStart(2, '0')}`;
    }
}


