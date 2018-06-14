import { Resource } from './resource';

export class Author extends Resource {
  nombre: string;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.nombre = null;
  }
}
