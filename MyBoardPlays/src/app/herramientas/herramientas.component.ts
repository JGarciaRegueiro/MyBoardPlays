import { Component } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {

  
  numeroDados: number;
  numeroCaras: number;
  resultados: number[];
  sumaTotal: number;
  numParticipantes : number;
  numPremiado: number;
  tiempo= '';
  horas = 0;
  minutos =0;
  segundos=0;
  intervalo: any;


  lanzarDados() {
    this.resultados = Array.from({ length: this.numeroDados }, () => Math.floor(Math.random() * this.numeroCaras) + 1);
  }

  ejecutarLanzamiento() {
    this.lanzarDados();
    this.sumaTotal = this.resultados.reduce((a, b) => a + b, 0);
  }

  ejecutarGiro() {
    this.numPremiado = Math.floor(Math.random() * this.numParticipantes) + 1;
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
    this.segundos++;
    if (this.segundos === 60) {
      this.segundos = 0;
      this.minutos++;
      if (this.minutos === 60) {
        this.minutos = 0;
        this.horas++;
      }
    }

    this.tiempo = `${this.horas.toString().padStart(2, '0')}:
                   ${this.minutos.toString().padStart(2, '0')}:
                   ${this.segundos.toString().padStart(2, '0')}`;
  }
}