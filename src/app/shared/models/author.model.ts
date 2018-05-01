export class Author {
  id: number;
  nombre: string;

  constructor(obj: object) {
    Object.assign(this, obj);
  }
}
