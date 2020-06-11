const duck = (str) => {
    if(str[0] === '0')
    return false

    for(let i=1 ; i < str.length ; i++){
        const digit = str[i];

        if(digit === '0')
        return true

    }
    return false
}
console.log(duck('0214'))
console.log(duck('23450'))