function sort(words){
    
    var resultArr = [] //empty

    var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] //str arr

    var stringArr = words.split(" ")     //conversion
    for (var i = 0; i < numArr.length; i++) {
      for (var j = 0; j < stringArr.length; j++) {
        if (stringArr[j].includes(numArr[i])) {
          resultArr.push(stringArr[j]);
        }
      }
    }
    return resultArr.join(" ");
  } 
  
 console.log(sort("is2 Thi1s T4est 3a"));