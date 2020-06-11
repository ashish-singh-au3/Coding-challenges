function countAndSay(n){
    if( n < 1 || n >30){
        return("invalid");
    }

    let initial = "1";
    for(j=2 ; j<=n ; j++){
        let next = "";
        for(let i = 0; i<initial.length;i++){
            let count = 1;
            while(initial[i] = initial[i+count])
            count++;
            next += count + initial[i];
            i = i + count;
        }
        initial = next;
    }
    return initial;
}
console.log(countAndSay(6));
console.log(countAndSay(2));