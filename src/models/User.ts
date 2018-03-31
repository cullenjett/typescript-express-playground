export class User {
  public id: number;
  public email: string;
  public name: string;

  constructor({ email, name }) {
    this.id = Date.now();
    this.email = email;
    this.name = name;
  }
}
