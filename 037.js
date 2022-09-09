<<<<<<< HEAD
const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for (let index in arr) {
  let val = arr[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
=======
const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for (let index in arr) {
  let val = arr[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
>>>>>>> 5387ef5abc81cd854337e5f179e9b11b9b7b852d
