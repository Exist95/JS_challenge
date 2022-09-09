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
