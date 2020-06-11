function norep(arr) {
    var n = arr.length 
    var result = ''

  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(norep([1,2,1,2,4,5,5,6,6,11,4]));