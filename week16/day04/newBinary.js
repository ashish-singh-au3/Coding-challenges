function newBinary(arr , low , high , item){
    if(low > high){
        return -1
    }
    const mid = Math.floor((low + high) / 2)

    if( arr[mid] === item){
        return mid
    }
    if( arr[low] <= arr[mid]){
        if(item >= arr[low] && item <= arr[mid]){
        return newBinary(arr , low , mid-1 , item)
        }
        else{
            return newBinary(arr , mid+1 , high ,item)
        }
    }
    else{
        if(item >= arr[mid] && item<=arr[high]){
            return newBinary(arr , mid+1 , high , item)
        }
        else{
            return newBinary(arr, low ,mid-1 , item)
        }
    }
}
console.log(newBinary([5,6,7,1,2],0,4,5));