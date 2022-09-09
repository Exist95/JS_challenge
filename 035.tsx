<<<<<<< HEAD
function one(n: number) {
  function two(num: number) {
    const sq = Math.pow(num, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
=======
function one(n: number) {
  function two(num: number) {
    const sq = Math.pow(num, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
>>>>>>> 5387ef5abc81cd854337e5f179e9b11b9b7b852d
