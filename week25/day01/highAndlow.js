function highAndlow(num) {
    
    var newArray = num.split(' ').map(function(item) {  //splitting the string and converting elements to num
      return Number(item)
    })
  
    return {
      highest : Math.max(...newArray),
      lowest : Math.min(...newArray),
    }
  };
  

  console.log(highAndlow('1 2 3 4 5 6'));
  console.log(highAndlow('1 2 -3 4 5 '));
  console.log(highAndlow('1 9 3 4 -5 '));