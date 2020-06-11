function removeSmallest(num) {
  var outputArr = [];
  var smallest = num[0];
  for (var i = 0; i < num.length; i++) {
    if (num[i] < smallest) {
      smallest = num[i];
    }
  }
  for (var j = 0; j < num.length; j++) {
    if (j !== num.indexOf(smallest)) {
      outputArr.push(num[j]);
    }
  }
  return outputArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
