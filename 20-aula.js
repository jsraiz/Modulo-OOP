class Pessoa {
  #nome;
	constructor(nome) {
		this.#nome = nome;
	}

	get nome() {
	  return this.#nome.toUpperCase();
  }
  
  set nome(nome) {
    this.#nome = nome;
  }
}

const p = new Pessoa('Ayrton');
console.log('prefix', p.nome);

p.nome = 'Teshima';

console.log('prefix2', p.nome)


class PessoaFisica extends Pessoa {
  #CPF;
  constructor(nome, CPF) {
    super(nome);
    this.#CPF = this.#removeCPFPontuacao(CPF);
  }
  
  get CPF() {
    return this.#CPF;
  }
  
  set CPF(CPF) {
    this.#CPF = this.#removeCPFPontuacao(CPF);
  }
  
  #removeCPFPontuacao(CPF) {
    return CPF.replaceAll('.', '').replaceAll('-', '');
  }
}

const pf = new PessoaFisica('Ayrton', '123.456.789-10');
console.log(pf.CPF);
pf.CPF = 'ME.UCP-FT.OP';
console.log(pf.CPF)

class PessoaJuridica extends Pessoa {
  #cnpj;
  constructor(nome, cnpj) {
    super(nome);
    this.#cnpj = cnpj;
  }
  
  getCNPJ() {
    return this.#cnpj
  }
}

class MEI extends PessoaJuridica {
  #limite;
  constructor(nome, cnpj) {
    super(nome, cnpj);
    this.#limite = 80_000;
  }
  
  getLimite() {
    return this.#limite;
  }
}



