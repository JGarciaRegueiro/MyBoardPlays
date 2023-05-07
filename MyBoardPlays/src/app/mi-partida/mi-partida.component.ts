import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-partida',
  templateUrl: './mi-partida.component.html',
  styleUrls: ['./mi-partida.component.css']
})
export class MiPartidaComponent implements OnInit {
  
  participantes: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const participantesStr = this.route.snapshot.paramMap.get('participantes');
    if (participantesStr) {
      const participantes = +participantesStr;
      if (!isNaN(participantes)) {
        this.participantes = participantes;
      }
  }
} }

  
