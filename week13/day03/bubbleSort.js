//var a = [3,5,6,1,2]
function bubbleSort(arr) {
    var n = arr.length;
    var temp;
    for(var i = 0; i < (n-1); i++){
        for(var j = 0; j < (n - i - 1); j++){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        
    }
    return arr;
}
console.log(bubbleSort([3,5,6,1,2]));