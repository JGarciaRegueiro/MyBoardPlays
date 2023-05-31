import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  isLogged : boolean = false;
  isNavbarCollapsed: boolean = true;

  constructor(private route: Router, private router:ActivatedRoute) {}


  ngOnInit():void {

    this.route.events.subscribe((value:any)=>{
      if(localStorage.getItem('token')){
      this.isLogged =true;
      } else {
        this.isLogged=false;
      }
    })
  }

  toggleNavbar(): void {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
