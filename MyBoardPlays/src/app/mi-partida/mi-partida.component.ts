import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-partida',
  templateUrl: './mi-partida.component.html',
  styleUrls: ['./mi-partida.component.css']
})
export class MiPartidaComponent {
  
  /*constructor(private participantes:MiPartidaComponent){ }

  ngOnInit():void{

    generarTabla(); // llamamos al método para que se ejecute una vez


  function generarTabla() : void {
    // Obtener la cantidad de jugadores ingresada por el usuario
    const cantidadJugadores = parseInt(document.getElementById("participantes").value);

    // Obtener la tabla y su cuerpo
    const tablaJugadores = document.getElementById("tabla-jugadores");
    const cuerpoTabla = tablaJugadores.getElementsByTagName("tbody")[0];

    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = "";

    // Crear una fila por cada jugador y agregar los datos correspondientes
    for (let i = 1; i <= cantidadJugadores; i++) {
      const filaJugador = document.createElement("tr");

      const nombreJugador = document.createElement("td");
      nombreJugador.textContent = `Jugador ${i}`;
      filaJugador.appendChild(nombreJugador);

      const equipoJugador = document.createElement("td");
      equipoJugador.textContent = "Equipo";
      filaJugador.appendChild(equipoJugador);

      const posicionJugador = document.createElement("td");
      posicionJugador.textContent = "Posición";
      filaJugador.appendChild(posicionJugador);

      cuerpoTabla.appendChild(filaJugador);
    }
  }
}*/
}
