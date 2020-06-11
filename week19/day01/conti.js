function contiguousSum(array, k){
    let sum = ' '
    for(let i = 0 ; i <= array.length - k; i++){
        sum[i] = 0
        let j = 0
        while(j<k){
            sum[i] = sum[i] + array[i+j]
            j++
        }
        sum[sum.length - 1]
    }

    return sum
}
console.log(contiguousSum([2,1,5,1,3,2] , 3))