import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DataSignUp } from '../model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent  implements OnInit{
  signupForm: FormGroup;

  data: DataSignUp = {
    nombre: '',
    email: '',
    pass: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });
  }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    this.apiService.signup(this.signupForm.value).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
