export class Repository {
  #lStorage;
  constructor(Storage) {
    this.#lStorage = new Storage;
  }

  setStorageTable(table) {
    this.#lStorage.table = table;
  }

  async save(resource) {
    return this.#lStorage.save(resource.toObject());
  }

  async getById(id) {
    const resource = await this.#lStorage.findOne(id);

    if (!resource) {
      return null;
    }
  
    return resource;
  }

  async getAll() {
    return this.#lStorage.findAll();
  }

  async update(resource) {
    return this.#lStorage.findOneAndUpdate(resource.id, resource.toObject());
  }

  async remove(id) {
    return this.#lStorage.remove(id);
  }

  async removeAll() {
    return this.#lStorage.removeAll();
  }
}