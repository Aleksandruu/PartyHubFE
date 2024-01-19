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
  wrongPassword = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    });
  }


  saveNewPassword() {
    let password: string = this.forgotPasswordForm.value.password;
    let passwordConfirm: string = this.forgotPasswordForm.value.passwordConfirm;

    if (password == passwordConfirm) {
      let newPassword: string = password;
      //trimitem parola pe backend
      this.router.navigate([PATHS.LOGIN]);
    }
    else {
      this.wrongPassword = true;
    }
  }
}
