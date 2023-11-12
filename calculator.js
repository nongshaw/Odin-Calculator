let a = 0;              //firstNumber
let b = 0;              //secondNumber
let operator = 0;       //operator (add, subtract, multiply, divide)

let displayNumber = 0;  //number shown on display
// when you press the button
let displayHistory = 0; //shows the query that resulted in the given calculation

function appendNumber(selection) {
    if (a === 0){ //changes the first number only
        if (displayNumber === 0) {
            if (selection != 0){ 
            displayNumber = selection; //if display number is 0, change it to the selected number - but not if first digit is 0
            }
        } else {
            displayNumber += selection; //otherwise, add the number selected to the end of the string
        }
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`; //update the display with new number
    } else { //changes the second number only
        if (b === 0) {
                if (selection != 0){ 
                b = selection;
            }
        } else {
            b += selection;
        }
            document.getElementById("pDisplay").innerHTML = `${a}`+" "+`${operator}`+" "+`${b}`; //update the display with new number
    }
}

function selectOperand(operand) {//changes operator to the one selected, saves displayNumber as a, updates displayNumber to include operand.
    if (b === 0) {
        operator = operand;
        a = displayNumber;
        document.getElementById("pDisplay").innerHTML = `${a}`+" "+`${operand}`+" ";
    } else {
        operate();
        operator = operand;
        a = displayNumber;
        document.getElementById("pDisplay").innerHTML = `${a}`+" "+`${operand}`+" ";
    }
}

function operate() {
    if (b != 0) {
        document.getElementById("pHistory").innerHTML = `${a}` + " " + `${operator}` + " " + `${b}` + " " + '=';
        if (operator === "+") {
            displayNumber = parseInt(a) + parseInt(b);
        } else if (operator === "-") {
            displayNumber = a - b;
        } else if (operator === "*") {
            displayNumber = a * b;
        } else if (operator === "/") {
            displayNumber = a / b;
        }
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
        b = 0;
    } else {
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
    }
}

function clearDisplay() {
    a = 0;
    b = 0;
    displayNumber = 0;
    document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
    document.getElementById("pHistory").innerHTML = " ";
}

