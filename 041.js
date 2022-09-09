function isPrime(n) {
  if (n === 1) return "No";
  if (n % 2 === 0) {
    return "No";
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return "No";
    }
  }
  return "Yes";
}

console.log(isPrime(5));
