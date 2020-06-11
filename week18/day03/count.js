const ones = array => array.reduce((acc,item) => acc + item)
const count = array => array.reduce((prev,item,index,array) =>
ones(item) > ones(array[prev]) ? index : prev,0
)
console.log(count([[0,0],[1,0],[1,1]]));