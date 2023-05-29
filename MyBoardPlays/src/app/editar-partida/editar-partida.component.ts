import { Component } from '@angular/core';
import { Partida } from '../partida';

@Component({
  selector: 'app-editar-partida',
  templateUrl: './editar-partida.component.html',
  styleUrls: ['./editar-partida.component.css']
})
export class EditarPartidaComponent {
  id:number;
  partida : Partida = new Partida()
  loading: any;
  /*
  constructor(private partidaService:PartidasService,private router:Router,private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.partidaService.obtenerJuegoPorId(this.id).subscribe(dato =>{
      this.partida = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/lista-partidas']);
    swal('Juego actualizado',`El juego   ${this.partida.nombre} ha sido actualizado con exito`,`success`);
  }

  get nombre(){
    return this.formJuego.get("creador") as FormControl;
  }
  get descripcion(){
    return this.formJuego.get("descripcion") as FormControl;
  }
  get minParticipantes(){
    return this.formJuego.get("minParticipantes") as FormControl;
  }
  get maxParticipantes(){
    return this.formJuego.get("maxParticipantes") as FormControl;
  }
  get dificultad(){
    return this.formJuego.get('dificultad') as FormControl;
  }

  formPartida= this.fb.group({
    "creador" : ['', Validators.required],
    "ubicacion" : ['', [Validators.required,Validators.minLength(10)]] ,
    "fecha" : ['', Validators.required],
    "duracion" : ['', Validators.required],
    
  });

  onSubmit(){
    this.juegoService.editarJuego(this.id,this.juego).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
  */
}
