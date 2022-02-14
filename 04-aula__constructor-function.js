function Pessoa(nome, pais) {
  this.nome = nome;
  this.pais = pais;
  this.pagarBoletos = function() {
    return 'pagar boletos';
  }
}

const ayrtonPessoa = new Pessoa('Ayrton', 'Brasil');
console.log(ayrtonPessoa);
console.log(ayrtonPessoa.nome);
console.log(ayrtonPessoa.pagarBoletos());