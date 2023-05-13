import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Credentials } from '../model';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    pass: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {

  }

  login(form: NgForm){

    console.log('form value', form.value);

    this.apiService.login(this.creds)
      .subscribe(response => {
        this.router.navigate(['/'])
      })
  }

}
