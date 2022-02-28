import { Repository } from './Repository.js';
import { User } from '../entities/User.js'

export class UserRepository extends Repository {
  constructor(Storage) {
    super(Storage);
    this.setStorageTable('user');
  }

  async save(user) {
    const newUser = await super.save(user);
    return new User(newUser);
  }

  async getById(id) {
    const user = await super.getById(id);
    return new User(user);
  }

  async getAll() {
    const users = await super.findAll();
    return users.map(user => new User(user))
  }
}