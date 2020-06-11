function minsub(array, k) {
  
    let n= array.length
    let sum= 0
    let subLen = n+1
    let start = 0
    let end =0
    while (end<n) {
      while(sum <k && end < n) {
        sum += array[end++] 
      }
      while ( sum>=k && start < n ) {
        if(end - start < subLen) {
          subLen = end - start
        }
        sum -= array[start]
        start++
      }
    }
    return subLen > n ? 0 : subLen
         
    }
    console.log(minsub([2,1,5,3,8],7))