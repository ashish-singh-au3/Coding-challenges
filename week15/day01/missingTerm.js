function missingTerm(arr){
    let out = []
    arr.map((item , index) => {
        if(item + 1 != arr[index+1])
        out.push(item+1)
    })
    return out
}
console.log(missingTerm([1,3,7,8,9,10]));