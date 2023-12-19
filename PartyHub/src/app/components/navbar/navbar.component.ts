import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarExtend = false;

  toggleNavbar(): void {
    this.navbarExtend = !this.navbarExtend;
  }

  closeNavbar(): void {
    this.navbarExtend = false;
  }
}
