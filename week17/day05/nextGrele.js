const nextGreaterelement = array =>{
    let stack = []
    stack.push(array[0])

    let next
    let topElement
    let out = ' '

    for(let i = 0; i < array.length ; i++){
        const next = array[i];

        if(stack.length){
            topElement = stack.pop()

            while(next > topElement){
                out += `${topElement} -> ${next} \n`

                if(!stack.length)
                break
                topElement = stack.pop()
            }

            if(next < topElement) stack.push(topElement)

        }
        stack.push(next)
    }
    while(stack.length){
        topElement = stack.pop()
        next = -1
        out += `${topElement} -> ${next} \n`

    }
    return out
}
console.log(nextGreaterelement([4,5,2,25]))