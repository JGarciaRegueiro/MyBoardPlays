import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged : boolean = false;
  constructor(private route: Router) {}

  ngOnInit():void {

    this.route.events.subscribe((value:any)=>{
      if(localStorage.getItem('token')){
      this.isLogged =true;
      } else {
        this.isLogged=false;
      }
    })
  }

}
