export class Author {
  #id;
  #recipes;
  #userId;

  constructor({ id, recipes = [], userId }) {
    this.#id = id;
    this.#recipes = new Set(recipes);
    this.#userId = userId;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get recipes() {
    return Array.from(this.#recipes.values());
  }

  set recipes(recipes) {
    this.#recipes = new Set(recipes);
  }

  addRecipe(recipe) {
    this.#recipes.add(recipe);
  }

  removeRecipe(recipe) {
    this.#recipes.delete(recipe);
    this.#recipes.delete(recipe.id);
  }

  get userId() {
    return this.#userId;
  }

  set userId(userId) {
    this.#userId = userId;
  }

  toObject() {
    return {
      id: this.id,
      recipes: this.recipes,
      userId: this.userId
    }
  }
}