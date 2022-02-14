class Pessoa {
  #name;
	constructor(name) {
		this.#name = name;
	}

	getName() {
	  return this.#name.toUpperCase();
  }
}
class PessoaFisica extends Pessoa {
  #cpf;
  constructor(name, cpf) {
    super(name);
    this.#cpf = cpf;
  }
  
  getCPF() {
    return this.#cpf;
  }
}

class PessoaJuridica extends Pessoa {
  #cnpj;
  constructor(name, cnpj) {
    super(name);
    this.#cnpj = cnpj;
  }
  
  getCNPJ() {
    return this.#cnpj
  }
}

class MEI extends PessoaJuridica {
  #limit;
  constructor(nome, cnpj) {
    super(nome, cnpj);
    this.#limit = 80_000;
  }
  
  getLimit() {
    return this.#limit;
  }
}



