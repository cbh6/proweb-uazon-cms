import { Author } from './author.model';
import { Photo } from './photo.model';
import { Resource } from './resource';

export class Book extends Resource {
  isbn: number;
  voto: number;
  num_voto: number;
  n_pags: number;
  precio: number;
  titulo: string;
  editorial: string;
  atributos_extra: object;
  cantidad: number;
  autores: Author[];
  fotos: Photo[];

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
    this.fotos = [];
  }
}
