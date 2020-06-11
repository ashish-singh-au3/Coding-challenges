function zero(array) {
    let count = 0
    for(let i= 0; i<array.length; i++) {
        const element = array[i];
        if(element != 0) {
            array [count] = element
            count++
        }
    }
    while(count < array.length) {
        array[count++] = 0
    }
 return array
 }
 console.log(zero([5,7,2,3,0,1,0,4,0,0,2]))