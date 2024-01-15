import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPasswordForm!: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  navigateToRegisterPage() {
    this.router.navigate([PATHS.REGISTER]);
  }

  navigateToResetPassword() {
    this.router.navigate([PATHS.FORGOTPASSWORD]);
  }
}
