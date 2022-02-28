export class User {
  #id;
  #name;
  #email;
  #photo;

  constructor({ id, name, email, photo } = {}) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#photo = photo;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get photo() {
    return this.#photo;
  }

  set photo(photo) {
    this.#photo = photo;
  }
}