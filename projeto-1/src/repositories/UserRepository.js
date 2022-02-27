import { Usuario } from '../entities/Usuario.js'

export class UserRepository {
  #lStorage;
  constructor(Storage) {
    this.#lStorage = new Storage('usuario');
  }

  async save(data) {
    const user = await this.#lStorage.save(data);
    return new Usuario(user);
  }
}