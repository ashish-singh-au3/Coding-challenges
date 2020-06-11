function PowerOfTwo(n) {
  if (typeof n !== "number") return "Not a number";

  return n && (n & (n - 1)) === 0;
}

console.log(PowerOfTwo(8));
