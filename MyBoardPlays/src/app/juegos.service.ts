import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';


@Injectable({
  providedIn: 'root'
})

//La clase servicio llama al backend (a los end point del controlador) que a su vez consigue los datos de la BBDD
export class JuegosService {

  constructor(private httpClient : HttpClient) { }

  //Método obtener lista juegos. Retorna un observable de un array de juegos
  obtenerListaDeJuegos():Observable<Juego[]>{
   return this.httpClient.get<Juego[]>('http://localhost:8087/apirest/juegos');
  }

  //Método para registrar un nuevo juego
  guardarNuevoJuego(juego:Juego) : Observable<Object>{
    return this.httpClient.post('http://localhost:8087/apirest/juego/alta',juego);
  }
 //Método para editar un nuevo juego
  editarJuego(id:number, juego:Juego) : Observable<Object>{
    return this.httpClient.put('http://localhost:8087/apirest/juego/consultar/'+id ,juego);
  }

  //Obtener un juego por Id
  obtenerJuegoPorId(id:number): Observable<Juego>{
    return this.httpClient.get<Juego>('http://localhost:8087/apirest/juego/consultar/'+id);
  }
  //Método para eliminar un Juego
  eliminarJuego(id:number):Observable<Object>{
    return this.httpClient.delete('http://localhost:8087/apirest/juego/eliminar/'+id);
  }

}
