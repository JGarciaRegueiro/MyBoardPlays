import { Juego } from "./juego";

export interface Partida{
  id:number;
  creador: Creador | null;
  ubicacion:string;
  fecha:Date;
  juego :Juego | null;
  duracion:number;
  ganador:string;
}

export class Partida{
  id:number;
  creador: Creador | null;
  ubicacion:string;
  fecha:Date;
  juego :Juego | null;
  duracion:number;
}



export class Creador {
  id: number;
  email: string;
  fechaAlta: string;
  nombre: string;
  pass: string;
  partidas: Partida[]
}
