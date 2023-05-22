import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private numParticipantes: number;

  constructor() {
    this.numParticipantes = 0;
  }

  setNumParticipantes(num: number) {
    this.numParticipantes = num;
  }

  getNumParticipantes(): number {
    return this.numParticipantes;
  }
}