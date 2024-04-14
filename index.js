// Q69
// this function divide two num find quotient and reminder
function divide(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var reminder = num1 % num2;
    return { quotient: quotient, reminder: reminder
    };
}
console.log(divide(10, 3));
