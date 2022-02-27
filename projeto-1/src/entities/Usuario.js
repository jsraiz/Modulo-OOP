export class Usuario {
  #id;
  #nome;
  #email;
  #foto;

  constructor({ id, nome, email, foto }) {
    this.#id = id;
    this.#nome = nome;
    this.#email = email;
    this.#foto = foto;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get foto() {
    return this.#foto;
  }

  set foto(foto) {
    this.#foto = foto;
  }
}