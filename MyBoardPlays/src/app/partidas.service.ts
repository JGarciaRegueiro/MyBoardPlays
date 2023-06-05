import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from './partida';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})

//La clase servicio llama al backend (a los end point del controlador) que a su vez consigue los datos de la BBDD
export class PartidasService {

  constructor(private httpClient : HttpClient) { }

  //Método obtener lista juegos. Retorna un observable de un array de juegos
  obtenerListaDePartidas(id:number):Observable<Partida[]>{
   return this.httpClient.get<Partida[]>('http://localhost:8087/apirest/partidas/'+id);
  }

  //Método para registrar un nuevo juego
  guardarNuevaPartida(partida:Partida) : Observable<Object>{
    return this.httpClient.post('http://localhost:8087/apirest/partida/alta',partida);
  }
 //Método para editar un nuevo juego
  editarPartida(partida:Partida): Observable<Object>{
    return this.httpClient.put<Partida>('http://localhost:8087/apirest/partida/modificar/',partida);
  }

  //Obtener un juego por Id
  obtenerPartidaPorId(id:number): Observable<Partida>{
    return this.httpClient.get<Partida>('http://localhost:8087/apirest/partida/consultar/'+id);
  }
  //Método para eliminar un Juego
  eliminarPartida(id:number, usuario:Usuario):Observable<Object>{
    const options = {
      body: usuario
    };
    return this.httpClient.delete('http://localhost:8087/apirest/partida/eliminar/'+id, options);
  }

}
