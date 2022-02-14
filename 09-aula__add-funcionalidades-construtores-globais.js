Array.prototype.multiply = function() {
  return this.map(function(n) {
    return n * 2;
  })
}

const arr = [2, 3, 5, 13, 227];
console.log(arr.multiply());

const arr2 = new Array(1, 4, 5);
console.log(arr2.multiply())

Number.prototype.multiply = function() {
  return this * 2;
}

const num = 10;

console.log(num.multiply())

console.log((3).multiply())