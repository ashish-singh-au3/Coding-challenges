function hamming(str1, str2) {
  var a1 = str1.length;
  var a2 = str2.length;
  var hDistance = 0;
  if (a1 != a2) {
    for (var i = 0; i < a1; i++) {
      if (str1.charAt(i).toLowerCase() != str2.charAt(i).toLowerCase()) {
        hDistance++;
      }
    }
    return hDistance;
  }
}
console.log(hamming("karolin,kathin"));
