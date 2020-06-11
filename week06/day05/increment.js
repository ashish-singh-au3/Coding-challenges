function increment(string){
    var newStr = " ";
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i<string.length ; i++){
        var char = string.charAt(i);
        if(char ===  'z'){
            newStr = newStr + 'a';
        }
        else{
            newStr = newStr + letters.charAt(letters.indexOf(char) + 1)
        }
    }
    return newStr;
}
console.log(increment("b"));