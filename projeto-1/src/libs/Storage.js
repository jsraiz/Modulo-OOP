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
    
    const newData = {
      id,
      ...data,
    }

    this.#storage.setItem(this.#getKey(id), JSON.stringify(newData));
    return data;
  }

  async findOne(id) {
    return JSON.parse(this.#storage.getItem(this.#getKey(id)));
  }

  async findAll() {
    return Object.entries(this.#storage)
        .filter(([entryKey]) => (
          entryKey.startsWith(this.table)
        ))
        .map(([ _, entryValue ]) => (
          JSON.parse(entryValue)
        ))
  }

  async findOneAndUpdate(id, data) {
    const item = await this.findOne(id);
    
    if (!item) {
      throw new Error(`Registro "${id}" não encontrado em ${this.table}`);
    }

    const newData = {
      ...item,
      ...data,
      id: item.id,
    };

    this.#storage.setItem(this.#getKey(id), JSON.stringify(newData));

    return this.findOne(id);
  }

  async remove(id) {
    this.#storage.removeItem(this.#getKey(id));
    return true;
  }

  async removeAll() {
    const items = await this.findAll();
    return Promise.all(items.map(item => this.remove(item.id)))
  }

  #generateId() {
    let gen = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return `${gen()}${gen()}-${gen()}${gen()}`;
  }

  #getKey(id) {
    return `${this.table}-${id}`;
  }

}