var i = prompt("Enter the string");
function palindrome(i){
    if(i.split('').reverse().join("").toLowerCase()==i.toLowerCase()){
        return true;
    }
    else{
       return false;
    }
}


console.log(palindrome(i));