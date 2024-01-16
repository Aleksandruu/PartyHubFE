import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PATHS } from 'src/app/constants/paths';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarExtend = false;
  isLoggedIn = false;

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) {
    this.authentication.isLoggedIn.subscribe(
      (value) => (this.isLoggedIn = value)
    );
  }

  logout(): void {
    this.authentication.logout();
    this.navigateToLogin();
  }

  navigateToLogin(): void {
    this.router.navigate([PATHS.LOGIN]);
    this.closeNavbar();
  }
  navigateToRegister(): void {
    this.router.navigate([PATHS.REGISTER]);
    this.closeNavbar();
  }
  navigateToPartyCode(): void {
    this.router.navigate([PATHS.PROMOCODE]);
    this.closeNavbar();
  }

  toggleNavbar(): void {
    this.navbarExtend = !this.navbarExtend;
  }

  closeNavbar(): void {
    this.navbarExtend = false;
  }
}
