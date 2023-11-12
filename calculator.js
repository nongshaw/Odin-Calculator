let a = 0;              //firstNumber
let b = 0;              //secondNumber
let operator = 0;       //operator (add, subtract, multiply, divide)

let displayNumber = 0;  //number shown on display
// when you press the button, add it to the str.

function appendNumber(selection) {
    if (a === 0){
        if (displayNumber === 0) {
            displayNumber = selection; //if display number is 0, change it to the selected number
        } else {
            displayNumber += selection; //otherwise, add the number selected to the end of the string
        }
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`; //update the display with new number
    } else {
        if (b === 0) {
            b = selection;
        } else {
            b += selection;
        }
            document.getElementById("pDisplay").innerHTML = `${displayNumber}`+" "+`${operator}`+" "+`${b}`; //update the display with new number
    }
}

function selectOperand(operand) {
    //changes operator to the one on the button
    //AND it takes the displayNumber and saves it as a new variable OR just as a... as a...
    //THEN it adds a " ", the symbol, a " ".
    operator = operand;
    a = displayNumber;
    document.getElementById("pDisplay").innerHTML = `${displayNumber}`+" "+`${operand}`+" ";
}

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
