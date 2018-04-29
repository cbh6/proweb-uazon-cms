export class Book {
  id: number;
  isbn: number;
  voto: number;
  num_voto: number;
  n_pags: number;
  precio: number;
  titulo: string;
  editorial: string;
  atributos_extra: object;

  constructor(obj: object) {
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
  }
  isCheap() {
    // return this.price < 100;
  }
}
