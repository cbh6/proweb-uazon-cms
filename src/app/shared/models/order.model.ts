import { Book } from './book.model';
import { User } from './user.model';
import { Resource } from './resource';

export class Order extends Resource {
  total: number;
  fecha: string;
  pagado: boolean;
  libros: Book[];
  user: User;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.total = null;
    this.fecha = '';
    this.pagado = null;
    this.libros = [];
    this.user = null;
  }

  getCountProductos() {
    return this.libros.reduce((pl, al) => {
      return pl + al.cantidad;
    }, 0);
  }
}
