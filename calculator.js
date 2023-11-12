//STILL DO! I need to correct the css and or js so that when you enter large numbers it does not expand the size of the calculator to the right.


let a = 0;              //firstNumber
let b = 0;              //secondNumber
let operator = 0;       //operator (add, subtract, multiply, divide)

let displayNumber = 0;  //number shown on display
// when you press the button
let result = false;

function appendNumber(selection) {
    if (result === true && operator == false) { //if a result has occured, clear the calculator
        clearDisplay();
        result = false;
        appendNumber(selection);
    } else {
        if (a === 0 && operator == false){ //changes the first number only
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
}

function selectOperand(operand) {//changes operator to the one selected, saves displayNumber as a, updates displayNumber to include operand.
    if (displayNumber)
    {
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
}

function operate() {
    if (operator != 0) {
        document.getElementById("pHistory").innerHTML = `${a}` + " " + `${operator}` + " " + `${b}` + " " + '=';
        if (operator === "+") {
            displayNumber = parseInt(a) + parseInt(b);
        } else if (operator === "-") {
            displayNumber = a - b;
        } else if (operator === "x") {
            displayNumber = a * b;
        } else if (operator === "÷") {
            displayNumber = a / b;
        }
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
        b = 0;
    } else {
        document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
    }
    a = 0
    operator = 0;
    result = true;
}

function clearDisplay() {
    a = 0;
    b = 0;
    displayNumber = 0;
    document.getElementById("pDisplay").innerHTML = `${displayNumber}`;
    document.getElementById("pHistory").innerHTML = " ";
}

