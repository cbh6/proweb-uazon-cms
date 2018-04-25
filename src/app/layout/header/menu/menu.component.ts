import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uaz-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent {
  @HostBinding('class.uaz-menu') componentClass = true;

  sections: Array<{ icon: string; label: string; link: string }> = [
    {
      label: 'Libros',
      link: '/libros',
      icon: 'book icon'
    },
    {
      label: 'Autores',
      link: '/autores',
      icon: 'pencil alternate icon'
    },
    {
      label: 'Pedidos',
      link: '/pedidos',
      icon: 'euro sign icon'
    },
    {
      label: 'Comentarios',
      link: '/comentarios',
      icon: 'comments outline icon'
    },
    {
      label: 'Usuarios',
      link: '/usuarios',
      icon: 'users icon'
    }
  ];
}
