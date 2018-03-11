import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uaz-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class UazMenuComponent {
  @HostBinding('class.uaz-menu') componentClass = true;

  sections: Array<{ icon: string; label: string; link: string }> = [
    {
      label: 'Libros',
      link: '/books',
      icon: ''
    },
    {
      label: 'Autores',
      link: '/authors',
      icon: ''
    },
    {
      label: 'Pedidos',
      link: '/orders',
      icon: ''
    },
    {
      label: 'Comentarios',
      link: '/comments',
      icon: ''
    },
    {
      label: 'Usuarios',
      link: '/users',
      icon: ''
    }
  ];
}
