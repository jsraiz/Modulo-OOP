import { User } from '../entities/User.js'

export class UserRepository {
  #lStorage;
  constructor(Storage) {
    this.#lStorage = new Storage('user');
  }

  async save(user) {
    const newUser = await this.#lStorage.save(user.toObject());
    return new User(newUser);
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