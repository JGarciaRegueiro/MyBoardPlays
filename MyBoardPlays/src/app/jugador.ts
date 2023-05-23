export interface Jugador {
    nombre: string;
    email: string;
    ganador: boolean;
    puntuaciones:number;
    orden:number;
  }

export class Jugador{
    nombre: string;
    email: string;
    ganador: boolean;
    puntuaciones: number;
    orden: number;
}