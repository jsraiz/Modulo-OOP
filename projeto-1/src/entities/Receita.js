export class Receita {
  #id;
  #titulo;
  #imagem;
  #totalPorcoes;
  #tempoPreparo;
  #ingredientes;
  #modoPreparo;
  #autorId;

  constructor({ id, titulo, imagem, totalPorcoes, tempoPreparo, ingredientes = [], modoPreparo, autorId }) {
    this.#id = id;
    this.titulo = titulo;
    this.imagem = imagem;
    this.totalPorcoes = totalPorcoes;
    this.#tempoPreparo = tempoPreparo;
    this.#ingredientes = new Set(ingredientes);
    this.modoPreparo = modoPreparo;
    this.#autorId = autorId;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(titulo) {
    this.#titulo = titulo;
  }

  get imagem() {
    return this.#imagem;
  }

  set imagem(imagem) {
    this.#imagem = imagem;
  }

  get totalPorcoes() {
    return this.#totalPorcoes;
  }

  set totalPorcoes(totalPorcoes) {
    this.#totalPorcoes = totalPorcoes;
  }

  get tempoPreparo() {
    return this.#tempoPreparo;
  }

  set tempoPreparo(tempoPreparo) {
    this.#tempoPreparo = tempoPreparo;
  }

  get ingredientes() {
    return Array.from(this.#ingredientes.values());
  }

  set ingredientes(ingredientes = []) {
    this.#ingredientes = new Set(ingredientes);
  }

  addIngrediente(ingrediente) {
    this.#ingredientes.add(ingrediente);
  }

  removeIngrediente(ingrediente) {
    this.#ingredientes.delete(ingrediente);
    this.#ingredientes.delete(ingrediente.id);
  }

  get modoPreparo() {
    return this.#modoPreparo;
  }

  set modoPreparo(modoPreparo) {
    this.#modoPreparo = modoPreparo;
  }

  get autorId() {
    return this.#autorId;
  }

  set autorId(autorId) {
    this.#autorId = autorId;
  }
}