import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario } from '../usuario';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  editarPerfilActivo = false;

  usuario: any = {
    id: 0,
    nombre: '',
    email: '',
    pass: '',
    fechaAlta: new Date()
  };


  constructor(private usuarioServicio:ApiService, private router:Router, private route:ActivatedRoute){
  }


  ngOnInit(): void {
    const email=localStorage.getItem('user') || '';
    this.usuarioServicio.consultarUsuario(email).subscribe((user) => {
      this.usuario = user;
    });


  }

  modificarUsuario(usuario: Usuario) {
    this.usuarioServicio.modificarUsuario(usuario.id,usuario).subscribe(
      (result) => {
        console.log(result);
        swal({
          title: '¡Modificado!',
          text: 'El perfil se ha modificado con éxito',
          type: 'success'
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  confirmarCerrarSesion() {
    swal({
      title: 'Cerrar sesión',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Cerrar sesión',
      confirmButtonClass: 'btn btn-success me-4',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.router.navigate(['/'])
      }
    });
  }
  eliminarUsuario(id:number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la cuenta",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      cancelButtonText: 'Si, elimínala',
      confirmButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success me-4',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling:true
    }).then((result) => {
      if(!result.value){
        this.usuarioServicio.eliminarUsuario(id).subscribe(dato =>{
      console.log(dato);

    })
    }
  })
}
}

