function snake(arr){

    return arr.map((item , index) => index % 2 != 0 ? item.reverse() : item )

}
console.log(snake([[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,39,50,55]]));