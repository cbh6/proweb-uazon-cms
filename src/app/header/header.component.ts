import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uaz-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class UazHeaderComponent {
  @HostBinding('class.uaz-header') componentClass = true;
}
