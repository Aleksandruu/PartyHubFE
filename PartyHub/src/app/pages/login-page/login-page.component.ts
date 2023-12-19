import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
import { Login } from 'src/app/types/login.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(""),
        password: new FormControl("")
      }
    );
  }

  navigateToRegisterPage() {
    this.router.navigate([PATHS.REGISTER]);
  }
  navigateToResetPassword() {
    this.router.navigate([PATHS.FORGOTPASSWORD]);
  }

  login() {
    let login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(login);
  }
}
