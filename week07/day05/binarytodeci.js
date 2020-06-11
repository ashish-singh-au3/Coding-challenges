function binarytodeci(divi){
    var value = "";
    var reamainder;
    while(divi > 1){
        reamainder = divi % 2;
        value = reamainder + value;
        divi = (divi - reamainder)/2;
    }
    return(divi + value);
}
console.log(binarytodeci(20));