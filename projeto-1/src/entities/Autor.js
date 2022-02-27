export class Autor {
  #id;
  #receitas;
  #userId;

  constructor({ id, receitas = [], userId }) {
    this.#id = id;
    this.#receitas = new Set(receitas);
    this.#userId = userId;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get receitas() {
    return Array.from(this.#receitas.values());
  }

  set receitas(receitas) {
    this.#receitas = new Set(receitas);
  }

  addReceita(receita) {
    this.#receitas.add(receita);
  }

  removeReceita(receita) {
    this.#receitas.delete(receita);
    this.#receitas.delete(receita.id);
  }

  get userId() {
    return this.#userId;
  }

  set userId(userId) {
    this.#userId = userId;
  }
}