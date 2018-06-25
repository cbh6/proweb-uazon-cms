import { Resource } from './resource';
import { Book } from './book.model';

export class Photo extends Resource {
  path_foto: string;
  orden: string;
  libro: Book;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }
}
