import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { PATHS } from 'src/app/constants/paths';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/types/profile.type';

@Component({
  selector: 'app-edit-profil-page',
  templateUrl: './edit-profil-page.component.html',
  styleUrls: ['./edit-profil-page.component.css'],
})
export class EditProfilPageComponent implements OnInit {
  editForm!: FormGroup;
  profile!: Profile;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile;
      this.editForm = new FormGroup({
        fullName: new FormControl(profile.fullName),
        age: new FormControl(profile.age),
      });
    });
  }
  save(): void {
    this.router.navigate([PATHS.PROFILE]);
  }
}
