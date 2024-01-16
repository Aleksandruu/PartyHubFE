import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/types/profile.type';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css'],
})
export class ProfilPageComponent {
  profile: Profile = {
    name: 'Mischie Florin Andrei',
    email: 'mischie_andrey@gmail.com',
    age: 19,
    promoCode: 'Iachtale',
    discountForNextTicket: 30,
  };
}
