function criaPessoa(nome, pais) {
  return {
    nome,
    pais,
    pagarBoletos() {
      console.log('Pagar boletos');
    }
  }  
}

const pessoaAyrton = criaPessoa('Ayrton', 'Brasil');
const pessoaJose = criaPessoa('José', 'EUA');

console.log(pessoaAyrton.pais);
console.log(pessoaJose.pais);