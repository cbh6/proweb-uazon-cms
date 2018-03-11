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
      icon: 'book icon'
    },
    {
      label: 'Autores',
      link: '/authors',
      icon: 'pencil alternate icon'
    },
    {
      label: 'Pedidos',
      link: '/orders',
      icon: 'euro sign icon'
    },
    {
      label: 'Comentarios',
      link: '/comments',
      icon: 'comments outline icon'
    },
    {
      label: 'Usuarios',
      link: '/users',
      icon: 'users icon'
    }
  ];
}
