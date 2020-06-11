function commonElement(arr1,arr2){
let arrMap = {}
for(i=0 ; i<arr1.length; i++){
    const element = arr1[i];
    if(arrMap[element]= undefined){
        arrMap[element] = 1;
    }
}

    let out = [];
    for(i=0; i<arr2.length; i++){
        const element = arr2[i];
        if(arrMap[element]){
            out.push(element);
        }
    }
    return out;
}
console.log(commonElement([1,2,3,4] , [2,3,6,7]));