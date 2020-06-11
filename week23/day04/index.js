function binarytodeci(divi){
    var value = "";
    var remainder;
    var count= 1;
    while(divi > 1){
        remainder = divi % 2;
        if(remainder === 1) count++
        value = remainder + value;
        divi = (divi - remainder)/2;
    }
    return count;
}
console.log(binarytodeci(1234));