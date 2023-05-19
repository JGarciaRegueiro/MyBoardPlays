import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DataSignUp } from '../model';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  data: DataSignUp = {
    nombre: '',
    email: '',
    pass: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {

  }

  signup(form: NgForm){
    this.apiService.signup(this.data)
    .subscribe(response => {
      this.router.navigate(['/'])
    })
  }

  ngOnInit():void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/'])
    }
  }

}
