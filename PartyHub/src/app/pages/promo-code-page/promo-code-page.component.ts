import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-promo-code-page',
  templateUrl: './promo-code-page.component.html',
  styleUrls: ['./promo-code-page.component.css'],
})
export class PromoCodePageComponent {
  promoCode!: string;
  promoCodeForm!: FormGroup;
  invalid = false;
  open = false;
  constructor(private profileService: ProfileService) { }

  toggleOpen() {
    this.open = !this.open;
  }

  ngOnInit() {
    this.promoCodeForm = new FormGroup({
      promoCode: new FormControl(this.promoCode, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9),
      ]),
    });
    this.profileService.getPromoCode().subscribe((x) => {
      this.promoCode = x.message;
    });
  }
  generatePromoCode(): void {
    this.profileService
      .generatePromoCode()
      .subscribe((x) => (this.promoCode = x.message));
  }
  editPromoCode(): void {
    const promoCode = this.promoCodeForm.value.promoCode;
    this.open = true;
    setTimeout(() => (this.open = false), 3000);
    if (this.promoCodeForm.get(promoCode)?.invalid) {
      this.invalid = true;
    } else {
      this.profileService.editPromoCode(promoCode).subscribe();
    }
  }
}
