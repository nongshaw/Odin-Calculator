let a = 0;              //firstNumber
let b = 0;              //secondNumber
let operator = 0;       //operator (add, subtract, multiply, divide)

let displayNumber = 0;  //number shown on display


function operate(a, b) {

    if (operator === "add") {
        return add(a,b);
    } else if (operator === "subtract") {
        return subtract(a,b);
    } else if (operator === "multiply") {
        return multiply(a,b);
    } else if (operator === "divide") {
        return divide(a,b);
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}
