function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.copy = function() {
  return new this.constructor(this.nome, this.cpf);
}
Pessoa.prototype.getNome = function() {
  return this.nome;
}

function PessoaFisica(nome, cpf) {
  Pessoa.call(this, nome);
  this.cpf = cpf;
}

PessoaFisica.prototype = Object.create(Pessoa.prototype);
PessoaFisica.prototype.constructor = PessoaFisica;
PessoaFisica.prototype.getCPF = function() {
  return this.cpf;
}

function PessoaJuridica(nome, cnpj) {
  Pessoa.call(this, nome);
  this.cnpj = cnpj;
}

PessoaJuridica.prototype = Object.create(Pessoa.prototype);
PessoaJuridica.prototype.constructor = PessoaJuridica;
PessoaJuridica.prototype.getCNPJ = function() {
  return this.cnpj;
}

const pj = new PessoaJuridica('JS Raiz', '19301381');
console.log(pj.getNome())
console.log(pj.getCNPJ());

function MEI(nome, cnpj) {
  PessoaJuridica.call(this, nome, cnpj);
  this.limit = 80_000;
}

MEI.prototype = Object.create(PessoaJuridica.prototype);
MEI.prototype.constructor = MEI;
MEI.prototype.getLimit = function() {
  return this.limit;
}

const jsRaizMEI = new MEI('JS Raiz', '01309130');
const jsRaizMEICopy = jsRaizMEI.copy();
console.log(jsRaizMEI, jsRaizMEICopy)




const pf = new PessoaFisica('Ayrton', '000000000');
console.log(pf);

const pf2 = pf.copy();
console.log(pf2);



