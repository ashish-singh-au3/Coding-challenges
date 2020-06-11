function repetition(str){

    let out = ""
    for(let i = 0; i<str.length;){
        let count = '1'
        while(str[i] == str[i + count])
        count++

        out += count == 1 ? str[i] : str[i] + count
        i = i + count
    }
    return count
}
console.log(repetition("AABBBCAAA"));