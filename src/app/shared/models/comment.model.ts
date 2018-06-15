import { Resource } from './resource';
import { Book } from './book.model';

export class Comment extends Resource {
  autor: string;
  descripcion: string;
  validado: boolean;
  libro: Book;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.autor = '';
    this.descripcion = '';
    this.validado = null;
    this.libro = null;
  }
}
