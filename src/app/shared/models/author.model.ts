import { Resource } from './resource';

export class Author extends Resource {
  nombre: string;
  foto: string;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.nombre = '';
    this.foto = '';
  }
}
