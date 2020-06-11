function remDuplicate(array)
{
    let nextNonDuplicate = 1
    let i = 1
    while(i < array.length ){
        if(array[nextNonDuplicate - 1] !== array[i]){
            array[nextNonDuplicate] = array[i]
            nextNonDuplicate++
        }
        i++
    }
    return nextNonDuplicate
}
//console.log(remDuplicate([2,3,6,9,1]))

console.log(remDuplicate([2,2,2,11]))