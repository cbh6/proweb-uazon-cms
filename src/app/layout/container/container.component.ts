import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uaz-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @HostBinding('class.uaz-container') componentClass = true;

  constructor() {}
}
