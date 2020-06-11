function corrupt(nums){
    let i = 0;

    while(i < nums.length){
        const j = nums[i] - 1;
    
    if(nums[i] !== nums[j]){
        [nums[i] ,nums[j]] = [nums[j] , nums[i]];
    }
    else{
        i+=1;
    }
}
console.log(nums);
for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1){
        return(nums[i] , i+1);
    }
}
return([-1,-1]);
}
console.log(corrupt([2,3,5,1,6,3]));