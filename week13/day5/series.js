function series(num){
    let out = [num]
    while(num != 1){
        switch(num % 2){
            case 0:
                num = num / 2
                out.push(num)
                break;

                case 1:
                    num = 3 * num + 1
                    out.push(num)
                    break;
        }
    }
    return out
}
console.log(series(10))