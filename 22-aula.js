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

class PessoaFisica extends Pessoa {
  #CPF;
  static CPF_TOTAL = 11;
  constructor(nome, CPF) {
    super(nome);
    this.#CPF = PessoaFisica.removeCPFPontuacao(CPF);
  }
  
  get CPF() {
    return this.#CPF;
  }
  
  set CPF(CPF) {
    this.#CPF = PessoaFisica.removeCPFPontuacao(CPF);
  }
  
  static removeCPFPontuacao(CPF) {
    return CPF.replaceAll('.', '').replaceAll('-', '');
  }
  
  static validaCPF(CPF) {
    return this.removeCPFPontuacao(CPF).length === 11;
  }
}

const pf = new PessoaFisica('Ayrton', '123.456.789-10');

console.log(pf.CPF);

console.log(pf);

console.log('cpf', PessoaFisica.removeCPFPontuacao('000.000.000-00'))
console.log('cpf', PessoaFisica.removeCPFPontuacao('100.000.000-00'))
console.log('cpf', PessoaFisica.removeCPFPontuacao('200.000.000-00'))
console.log('cpf', PessoaFisica.removeCPFPontuacao('300.000.000-00'))

console.log(PessoaFisica.validaCPF('000.000.000-00'))

console.log(PessoaFisica.CPF_TOTAL)

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


