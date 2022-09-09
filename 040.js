let limit = 50;
let n = 5;
let arr = [20, 20, 20, 20, 20];
let total = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
  total += arr[i - 1];
  if (total <= limit) {
    cnt = i;
  }
}

console.log(i);
