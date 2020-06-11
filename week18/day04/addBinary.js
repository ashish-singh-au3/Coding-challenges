const addBinary = (b1 , b2) => {
    let sum = ''
    let carry = 0 ;
    let len1 = b1.length - 1;
    let len2 = b2.length - 1;

    while(len1 >= 0 || len2 >= 0){
        let bit1 = b1[len1] ?  b1[len1] : '0'
        let bit2 = b2[len2] ?  b2[len2] : '0'

        sum = String(bit1 ^ bit2 ^ carry) + sum

        if(bit1 === bit2 && bit1 !== String(carry)){
            carry = Number(!carry)


        }

        len1--
        len2--
    } 
    if(carry) sum = String(carry) + sum
    return sum
}
console.log(addBinary('1','101'))