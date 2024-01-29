import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-promo-code-page',
  templateUrl: './promo-code-page.component.html',
  styleUrls: ['./promo-code-page.component.css'],
})
export class PromoCodePageComponent {
  promoCodeForm = new FormGroup({
    code: new FormControl(''),
  });
}
