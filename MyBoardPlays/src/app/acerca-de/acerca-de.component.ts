import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  correo: string;
  comentario: string;
  enviado: string;
  constructor(private http: HttpClient) {}

  enviarCorreo() {
    this.enviado ="Email enviado";
    const datos = {
      email: this.correo,
      mensaje: this.comentario
    };

    this.http.post('/acerca-de/enviar-correo', datos).subscribe(
      (response) => {
        console.log('Correo electrónico enviado correctamente');
        // Realiza alguna acción adicional después de enviar el correo
      },
      (error) => {
        console.error('Error al enviar el correo electrónico:', error);
        // Manejo de errores
      }
    );
  }
}