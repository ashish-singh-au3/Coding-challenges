var a = "";
var n = 5;
var s = n - 1;
for (i = 1; i <= n; i++) {
  a = a.trim();
  a = " ".repeat(s) + a + (i > 1 ? " " : "") + "*";
  console.log(a);
  s--;
}
