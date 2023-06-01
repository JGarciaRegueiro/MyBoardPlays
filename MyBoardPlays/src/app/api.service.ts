import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Credentials, DataSignUp } from './model';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  login(creds: Credentials){
    return this.http.post('http://localhost:8087/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const usuario = creds.email;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);
      localStorage.setItem('user', usuario)

      return body;

    }))
  }

  getToken() {
    return localStorage.getItem('token');
  }

  signup(data: DataSignUp){
    return this.http.post('http://localhost:8087/apirest/usuario/alta', data, {
      observe: 'response'
    })
  }

  consultarUsuario(email:String){
    return this.http.get('http://localhost:8087/apirest/usuario/email/'+email);
  }

  eliminarUsuario(id:number):Observable<Object>{
      return this.http.delete('http://localhost:8087/apirest/usuario/eliminar/'+id);
    }


  modificarUsuario(id:number, usuario: Usuario):Observable<Object>{
    return this.http.put('http://localhost:8087/apirest/usuario/modificar/'+usuario.id, usuario);
  }

  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8087/apirest/usuarios');
   }

}
