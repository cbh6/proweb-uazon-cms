export class Book {
  title: string;
  isbn: string;
  // ...

  constructor(obj: Object) {
    this.title = obj['title'];
    this.isbn = obj['isbn'];

    // forma rapida, asigname en this, los atributos de obj
    Object.assign(this, obj);
  }
  isCheap() {
    return this.price < 100;
  }
}
