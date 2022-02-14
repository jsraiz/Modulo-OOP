class Pessoa {
  #nome;
	constructor(nome) {
		this.#nome = nome;
	}

	getNome() {
	  return this.#nome.toUpperCase();
  }
}

const p = new Pessoa('Ayrton');
console.log(p.getNome());

class PessoaFisica extends Pessoa {
  #CPF;
  constructor(nome, CPF) {
    super(nome);
    this.#CPF = CPF;
  }
  
  getCPF() {
    return this.#removeCPFPontuacao(this.#CPF);
  }
  
  #removeCPFPontuacao(CPF) {
    return CPF.replaceAll('.', '').replaceAll('-', '');
  }
}

const pf = new PessoaFisica('Ayrton', '123.456.789-10');
console.log(pf.getNome(), pf.getCPF());

class PessoaJuridica extends Pessoa {
  constructor(nome, cnpj) {
    super(nome);
    this.cnpj = cnpj;
  }
  
  getCNPJ() {
    return this.cnpj
  }
}

class MEI extends PessoaJuridica {
  constructor(nome, cnpj) {
    super(nome, cnpj);
    this.limite = 80_000;
  }
  
  getLimite() {
    return this.limite;
  }
}



