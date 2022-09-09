<<<<<<< HEAD
function gram(n) {
  let result = "";
  for (let i = 1; i < n.length; i++) {
    result += n[i - 1] + " " + n[i] + "\n";
  }
  return result;
}

let input = "Javascript";
console.log(gram(input));
=======
function gram(n) {
  let result = "";
  for (let i = 1; i < n.length; i++) {
    result += n[i - 1] + " " + n[i] + "\n";
  }
  return result;
}

let input = "Javascript";
console.log(gram(input));
>>>>>>> 5387ef5abc81cd854337e5f179e9b11b9b7b852d
