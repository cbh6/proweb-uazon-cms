import { Author } from './author.model';
import { Resource } from './resource';

export class Book extends Resource {
  // id: number;
  isbn: number;
  voto: number;
  num_voto: number;
  n_pags: number;
  precio: number;
  titulo: string;
  editorial: string;
  atributos_extra: object;
  autores: Author[];

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }

  init() {
    this.isbn = null;
    this.voto = null;
    this.num_voto = null;
    this.n_pags = null;
    this.precio = null;
    this.titulo = '';
    this.editorial = '';
    this.atributos_extra = {};
    this.autores = [];
  }
  cheap() {
    return 'cheap';
  }
}
