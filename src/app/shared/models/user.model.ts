export class User {
  name: string;
  email: string;
  role: string;
  address: string;
  cp: number;

  constructor(obj) {
    Object.assign(this, obj);
  }

  reset() {
    this.name = '';
    this.email = '';
    this.role = '';
    this.address = '';
    this.cp = null;
  }
}
