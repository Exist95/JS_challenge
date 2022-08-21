function gram(n) {
  let result = "";
  for (let i = 1; i < n.length; i++) {
    result += n[i - 1] + " " + n[i] + "\n";
  }
  return result;
}

let input = "Javascript";
console.log(gram(input));
