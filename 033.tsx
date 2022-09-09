var inputA = "1 2 3 4 5";
var answerA = inputA.split(" ").reverse();
let result = "";

for (let i = 0; i < answerA.length; i++) {
  result += answerA[i] + " ";
}

console.log(result.slice(0, -1));
