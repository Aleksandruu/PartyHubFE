import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PATHS } from 'src/app/constants/paths';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarExtend = false;

  constructor(private router: Router) {}

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
