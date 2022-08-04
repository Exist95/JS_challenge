const planet = (n) => {
  let arr = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "혜왕성",
  ];
  return arr[n - 1];
};

console.log(planet(2));
