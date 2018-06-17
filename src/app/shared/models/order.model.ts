import { Book } from './book.model';
import { Resource } from './resource';

export class Order extends Resource {
  total: number;
  fecha: string;
  pagado: boolean;
  libros: Book[];

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.total = null;
    this.fecha = '';
    this.pagado = null;
    this.libros = [];
  }
}
