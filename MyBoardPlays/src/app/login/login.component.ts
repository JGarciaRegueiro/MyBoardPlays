import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { Credentials } from '../model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailControl: FormControl;
  passControl: FormControl;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.passControl = new FormControl('', [Validators.required]);
  }

  login() {
    if (this.emailControl.invalid || this.passControl.invalid) {
      return;
    }

    const creds: Credentials = {
      email: this.emailControl.value,
      pass: this.passControl.value
    };
    this.apiService.login(creds)
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
