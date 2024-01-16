import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
import { Login } from 'src/app/types/login.type';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  wrongEmail = false;
  wrongPassword = false;

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  navigateToEventsPage() {
    this.router.navigate([PATHS.EVENTS]);
  }

  navigateToRegisterPage() {
    this.router.navigate([PATHS.REGISTER]);
  }

  navigateToResetPassword() {
    this.router.navigate([PATHS.EMAILFORRESET]);
  }

  login() {
    let login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authentication.login(login).subscribe(
      (res) => {
        this.navigateToEventsPage();
      },
      (err) => {
        if (err.status === 401) {
          this.wrongPassword = true;
          this.wrongEmail = true;
        }
      }
    );
  }
}
