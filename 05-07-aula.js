function User(name) {
  this.name = name;
}

User.prototype.getName = function() {
  return this.name;
}

User.prototype.name = 'Jesus';

const ayrton = new User('Teshima');
console.log(ayrton.hasOwnProperty('lastName'));
console.log(ayrton.getName());
