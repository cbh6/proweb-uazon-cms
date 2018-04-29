import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uaz-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
