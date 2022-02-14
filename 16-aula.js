class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  
  getNome() {
    return this.nome;
  }
}

class PessoaFisica extends Pessoa {
  
}

const pf = new PessoaFisica('Ayrton');
console.log(pf);