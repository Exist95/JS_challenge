<<<<<<< HEAD
let arr = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

arr.sort((a, b) => a - b);

let cnt = 0;
let newArr = [];

while (newArr.length < 3) {
  let n = arr.pop();
  if (!newArr.includes(n)) {
    newArr.push(n);
  }
  cnt++;
}

console.log(cnt);
=======
let arr = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

arr.sort((a, b) => a - b);

let cnt = 0;
let newArr = [];

while (newArr.length < 3) {
  let n = arr.pop();
  if (!newArr.includes(n)) {
    newArr.push(n);
  }
  cnt++;
}

console.log(cnt);
>>>>>>> 5387ef5abc81cd854337e5f179e9b11b9b7b852d
