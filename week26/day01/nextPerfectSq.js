function nextPerfectSquare(num) {
  let sqrt_num = Math.sqrt(num);
  // console.log(sqrt_num)
  if (Number.isInteger(sqrt_num)) {
    sqrt_num += 1;
    return sqrt_num * sqrt_num;
  } else return -1;
}

console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(114));
