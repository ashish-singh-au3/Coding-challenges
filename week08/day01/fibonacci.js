//Here's a simple function to iterate the Fibonacci sequence into an array using arguments in the for function more than the body of the loop:

fibonacci = function(number) {
  for (
    var fibonacciArray = [0, 1], i = 0, j = 1, k = 0;
    k < number;
    i = j, j = x, k++
  ) {
    x = i + j;
    fibonacciArray.push(x);
  }
  console.log(fibonacciArray);
};

console.log(fibonacci(10));
