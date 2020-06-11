function anagram(str1 , str2){
    if(str1.length != str2.length){
        return false;
    }
    for(var i = 0;i < str1.length ; i++){
        var char = str1.charAt(i);
        var foundIndex = str2.indexOf(char)
        if(foundIndex == -1){
            return false;
        }
        else{
            str2 = str2.substring(0 , foundIndex) + str2.substring(foundIndex + 1 , str2.length)
        }

    }
    return true;
}
console.log(anagram());