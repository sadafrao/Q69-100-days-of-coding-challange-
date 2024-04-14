// Q69
 // this function divide two num find quotient and reminder
 function divide(num1:number,num2:number){
    let quotient = Math.floor(num1 / num2);
    let reminder = num1 % num2;
    return {quotient, reminder
    }}
    console.log(divide(10,3));