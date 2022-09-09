let key = "Yujin Hyewon".split(" ");
let value = "70 100".split(" ");

const obj = {};
for (let i = 0; i < key.length; i++) {
  obj[key[i]] = parseInt(value[i]);
}

console.log(obj);
