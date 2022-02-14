const name = new String('ayrton');
const user = new Object;
user.name = 'Ayrton';
console.log(user);

const arr = new Array('Item 1', 'Item 2', 'Item 3');
console.log(arr);

const age = new Number(29);
console.log(age);

const numeros = new Array(2, 4, 5, 8);

console.log(
  numeros.map(function(numero) { return numero * 2})
)