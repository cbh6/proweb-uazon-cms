export class User {
  title: number;
  name: string;
  email: string;
  role: string;
  address: string;
  cp: number;

  constructor(obj) {
    Object.assign(this, obj);
  }
}
