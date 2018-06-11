import { Resource } from './resource';

export class Author extends Resource {
  id: number;
  nombre: string;

  constructor(obj: object) {
    super();
    Object.assign(this, obj);
  }
}
