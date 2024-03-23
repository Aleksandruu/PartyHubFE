import { AfterViewInit, Component } from '@angular/core';
import party from "party-js";

@Component({
  selector: 'app-payment-done-page',
  templateUrl: './payment-done-page.component.html',
  styleUrl: './payment-done-page.component.css',
})
export class PaymentDonePageComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.confetti();
  }
  confetti(): void {
    const container = document.getElementById('confetti-container');
    if (container) {
      party.confetti(container, {
        count: party.variation.range(100, 200),
      });
    }
  }

}
