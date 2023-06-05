import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})

//La clase servicio llama al backend (a los end point del controlador) que a su vez consigue los datos de la BBDD
export class JuegosService {

  constructor(private httpClient : HttpClient) { }

  //Método obtener lista juegos. Retorna un observable de un array de juegos
  obtenerListaDeJuegos(idUsuario:number):Observable<Juego[]>{
    console.log(idUsuario);
   return this.httpClient.get<Juego[]>('http://localhost:8087/apirest/juegosUsuario/'+idUsuario);
  }

  //Método para registrar un nuevo juego
  guardarNuevoJuego(juego:Juego, usuario:Usuario) : Observable<Object>{
    const juegoDao = {
      juego:juego,
      usuario:usuario
    }
    return this.httpClient.post('http://localhost:8087/apirest/juego/alta',juegoDao);
  }
 //Método para editar un nuevo juego
  editarJuego(id:number,juego:Juego): Observable<Object>{
    return this.httpClient.put<Juego>('http://localhost:8087/apirest/juego/modificar/'+juego.id ,juego);
  }

  //Obtener un juego por Id
  obtenerJuegoPorId(id:number): Observable<Juego>{
    return this.httpClient.get<Juego>('http://localhost:8087/apirest/juego/consultar/'+id);
  }
  //Método para eliminar un Juego
  eliminarJuego(id:number,usuario:Usuario): Observable<Object>{
    const options = {
      body: usuario
    };
    console.log(id, options);
    return this.httpClient.delete('http://localhost:8087/apirest/juego/eliminar/'+id, options);
  }

}
