import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})

//La clase servicio llama al backend (a los end point del controlador) que a su vez consigue los datos de la BBDD
export class JuegosService {


  //URL llama al END POINT LISTAR TODOS LOS JUEGOS DEL BACKEND
  private listaJuegosURL = "http://localhost:8087/apirest/juegos";

  constructor(private httpClient : HttpClient) { }

  //Método obtener lista juegos. Retorna un observable de un array de juegos
  obtenerListaDeJuegos():Observable<Juego[]>{
   return this.httpClient.get<Juego[]>(`${this.listaJuegosURL}`);
  }
  //Método para registrar un nuevo juego
  crearNuevoJuego(juego:Juego) : Observable<Object>{
    return this.httpClient.post(`${this.listaJuegosURL}`,juego);
  }
  //Método para actualizar un juego
  editarJuego(id:number, juego:Juego) : Observable<Object>{
    return this.httpClient.put(`${this.listaJuegosURL}/${id}`,juego);
  }
  //Obtener un juego por Id
  obtenerJuegoPorId(id:number): Observable<Juego>{
    return this.httpClient.get<Juego>(`${this.listaJuegosURL}/${id}`);
  }
  //Método para eliminar un Juego
  eliminarJuego(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.listaJuegosURL}/${id}`);
  }
}
