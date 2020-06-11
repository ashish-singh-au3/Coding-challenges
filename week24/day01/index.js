function countDupli(str){
    
    var arr = str.toLowerCase().split(''); 
    
    var newArr = arr.filter(function(a, b) {
      return arr.indexOf(a) !== b;
    });
    
    return newArr.filter(function(item, pos) {
      return newArr.indexOf(item) == pos;
    }).length;
  }
console.log(countDupli('aaaBbcde'));