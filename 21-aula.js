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

class PessoaJuridica extends Pessoa {
  #CNPJ;
  constructor(nome, CNPJ) {
    super(nome);
    this.#CNPJ = CNPJ;
  }
  
  get CNPJ() {
    return this.#CNPJ
  }
  
  set CNPJ(CNPJ) {
    this.#CNPJ = CNPJ;
  }
  
  calculaImposto(valor) {
    //ad asd
    //asd asd
    // asdas d asdasd
    //asd
    return 0.15 * valor;
  }
}

class MEI extends PessoaJuridica {
  #limite;
  constructor(nome, cnpj) {
    super(nome, cnpj);
    this.#limite = 80_000;
  }
  
  get limite() {
    return this.#limite;
  }
  
  set limite(limite) {
    this.#limite = limite;
  }
  
  calculaImposto(valor) {
    return super.calculaImposto(valor) - 150;
  }
}

const mei = new MEI('PaB', '0000000');
console.log(mei.calculaImposto(3500))


