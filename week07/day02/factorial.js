var inputNumber = prompt(' Enter the number'),
    value = inputNumber,
    total = inputNumber;

while (--value) {                           // using value for decrement and checking simultaneously
    total *= value;                         // multiplying with value and assigning the final value
}

console.log(inputNumber + '! = ' + total);