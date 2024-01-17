import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/profile.type';
import { MatIconModule } from '@angular/material/icon';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css'],
})
export class ProfilPageComponent implements OnInit {
  profile!: Observable<Profile>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
}
