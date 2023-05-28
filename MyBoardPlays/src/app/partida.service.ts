import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from './partida';


@Injectable({
  providedIn: 'root'
})

//La clase servicio llama al backend (a los end point del controlador) que a su vez consigue los datos de la BBDD
export class PartidasService {

  constructor(private httpClient : HttpClient) { }

  //Método obtener lista juegos. Retorna un observable de un array de juegos
  obtenerListaDePartidas():Observable<Partida[]>{
   return this.httpClient.get<Partida[]>('http://localhost:8087/apirest/juegos');
  }

  //Método para registrar un nuevo juego
  guardarNuevaPartida(partida:Partida) : Observable<Object>{
    return this.httpClient.post('http://localhost:8087/apirest/partida/alta',partida);
  }
 //Método para editar un nuevo juego
  editarJPartida(id:number,partida:Partida): Observable<Object>{
    return this.httpClient.put<Partida>('http://localhost:8087/apirest/partida/modificar/'+partida.id ,partida);
  }

  //Obtener un juego por Id
  obtenerPartidaPorId(id:number): Observable<Partida>{
    return this.httpClient.get<Partida>('http://localhost:8087/apirest/partida/consultar/'+id);
  }
  //Método para eliminar un Juego
  eliminarPartida(id:number):Observable<Object>{
    return this.httpClient.delete('http://localhost:8087/apirest/partida/eliminar/'+id);
  }

}
