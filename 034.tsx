let input: string = "176 156 155 165 166 169";
let sorted: string = "";

sorted = input.split(" ").sort().join(" ");

if (input === sorted) {
  console.log("Yes");
} else console.log("No");
