const readline = require('readline-sync');

var firstNumber = readlineSync.questionInt("Please enter your first number");
var secondNumber = readlineSync.questionInt("Please enter your second number");
var operator = readlineSync.question("Please enter the operation to perform- add, sub, mul, div:");

function addingNumbers (num1, num2) {
    return "Numbers added together equals" + (num1 + num2);
}
function subtractingNumbers (num1, num2) {
    return "Numbers subtracted from eachother equals" + (num1 - num2);
}
function multiplyingNumbers (num1, num2) {
    return "Numbers multiplied equals" + (num1 * num2);
}
function dividingNumbers (num1, num2) {
    return "Numbers divided equals" + (num1 / num2);
}
if(operator == "add"){
    console.log(addingNumbers(firstNumber, secondNumber));
}
else if(operator == "sub"){
    console.log(subtractingNumbers(firstNumber, secondNumber));
}
else if(operator == "mul"){
    console.log(multiplyingNumbers(firstNumber, secondNumber));
}
else if(operator == "div"){
    console.log(dividingNumbers(firstNumber, secondNumber));
}
