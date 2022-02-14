class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  
  getNome() {
    return this.nome;
  }
}

class PessoaFisica extends Pessoa {
  constructor(nome, CPF) {
    super(nome);
    this.CPF = CPF;
  }
  
  getCPF() {
    return this.CPF;
  }
}

const pf = new PessoaFisica('Ayrton Teshima', '000.000.000-00');
console.log(pf);
console.log(pf.getNome());
console.log(pf.getCPF())




