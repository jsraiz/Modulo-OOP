export class Storage {
  #table;
  #storage;

  constructor(table) {
    this.#table = table;
    this.#storage = window.localStorage;
  }

  get table() {
    return this.#table;
  }

  set table(table) {
    this.#table = table;
  }

  async save(data) {
    const id = this.#generateId();
    const key = `${this.table}-${id}`;

    const newData = {
      id,
      ...data,
    }

    this.#storage.setItem(key, JSON.stringify(newData));
    return data;
  }

  async findOne(id) {}

  async findAll() {}

  async findOneAndUpdate(id, data) {}

  async remove(id) {}

  async removeAll() {}

  #generateId() {
    let gen = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return `${gen()}${gen()}-${gen()}${gen()}`;
  }

}