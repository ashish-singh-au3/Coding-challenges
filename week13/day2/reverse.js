function reverse(num){
    let out = 0
    while(num != 0){
        let lastDigit = num % 10
        out = (out * 10) + lastDigit
        num = Math.floor(num / 10)
    }
    return out
}
console.log(reverse(456789))