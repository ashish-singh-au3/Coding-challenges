/*function stars(count) {
  var a = "";
  for (var i = 1; i < count; i++) {
    a = a + "*";
  }
  console.log(a);
}
function pattern(max) {
  var count = 0;
  for (i = 1; i <= 2 * max - 1; i++) {
    if (i <= max) {
      count++;
      stars(count);
    } else {
      count--;
      stars(count);
    }
  }
}
pattern(8); */

function coPrime(X, Y) {
  var maxValue = function coPrime(x, y) {
    while (x != 0 && y != 0) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    return Math.max(x, y);
  };

  var check = Math.floor(X / 2);

  if (maxValue(Math.max(X, Y), Math.min(X, Y)) == 1) {
    return X;
  }

  X = Math.floor(X / maxValue(X, Y));

  while (X > 0 && maxValue(X, Y) != 1) {
    X = Math.floor(X / maxValue(X, Y));
  }

  return X;
}
console.log(coPrime(30, 12));
