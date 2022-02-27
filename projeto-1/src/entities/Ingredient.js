export class Ingredient {
  #id;
  #nome;

  constructor(ingredienteDados) {
    this.#id = ingredienteDados.id;
    this.#nome = ingredienteDados.id;
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
}