function Pessoa(nome) {
  // request pra API
  // fetch('url')
  // milhões de regras de negócios
  this.nome = nome;
}

Pessoa.prototype.getNome = function() {
  return this.nome;
}

const p = new Pessoa('Ayrton');
console.log(p);

function PessoaFisica(nome, cpf) {
  Pessoa.call(this, nome);
  this.cpf = cpf;
}

PessoaFisica.prototype.__proto__ = Pessoa.prototype;
PessoaFisica.prototype.getCPF = function() {
  return this.cpf;
}

const pf = new PessoaFisica('Ayrtoon', '00000000000');
console.log(pf);




