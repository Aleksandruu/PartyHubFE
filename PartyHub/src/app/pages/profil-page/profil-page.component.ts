import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/profile.type';
import { MatIconModule } from '@angular/material/icon';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css'],
})
export class ProfilPageComponent implements OnInit {
  profile!: Observable<Profile>;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
  navigateToEditProfile(): void {
    this.router.navigate([PATHS.EDITPROFILE]);
  }
  navigateToPromoCodeDetails(): void {
    this.router.navigate([PATHS.PROMOCODEDETAILS]);
  }
}
