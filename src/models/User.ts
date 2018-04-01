export class User {
  id: number;
  email: string;
  name: string;

  constructor({ email, name }) {
    this.id = Date.now();
    this.email = email;
    this.name = name;
  }
}
