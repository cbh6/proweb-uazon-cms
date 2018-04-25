export class Book {
  isbn: string;
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

  isCheap() {
    // return this.price < 100;
  }
}
