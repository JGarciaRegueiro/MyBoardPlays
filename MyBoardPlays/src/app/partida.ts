import { Juego } from "./juego";
import { Usuario } from "./usuario";

export interface Partida{
  id:number;
  creador: Creador | null;
  ubicacion:string;
  fecha:Date;
  juego :Juego | null;
  duracion:number;
  ganador: Usuario;
}

export class Partida{
  id:number;
  creador: Creador | null;
  ubicacion:string;
  fecha:Date;
  juego :Juego | null;
  duracion:number;
  ganador: Usuario;
}



export class Creador {
  id: number;
  email: string;
  fechaAlta: string;
  nombre: string;
  pass: string;
  partidas: Partida[]
}
