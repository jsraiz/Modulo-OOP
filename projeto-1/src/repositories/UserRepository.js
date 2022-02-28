import { User } from '../entities/User.js'

export class UserRepository {
  #lStorage;
  constructor(Storage) {
    this.#lStorage = new Storage('user');
  }

  async save(data) {
    const user = await this.#lStorage.save(data);
    return new User(user);
  }

  // findOne -> getById

  async getById(id) {
    const user = await this.#lStorage.findOne(id);

    if (!user) {
      return null;
    }
  
    return new User(user);
  }

  // findAll -> getAll
  async getAll() {
    const users = await this.#lStorage.findAll();
    return users.map(user => new User(user))
  }

  // findOneAndUpdate -> update
  async update(user) {
    return this.#lStorage.findOneAndUpdate(user.id, user.toObject());
  }
}