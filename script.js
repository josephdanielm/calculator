function add(a , b) {
    return Number(a) + Number(b);
}

function subtract(a , b) {
    return Number(a) - Number(b);
}

function multiply(a , b) {
    return Number(a) * Number(b);
}

function divide(a , b) {
    return Number(a) / Number(b);
}

let operandOne
,   operandTwo
,   operator
,   operandOneStored = false
,   operatorStored = false
,   stagedNumber = 0;

function operate(inputOperator, numberOne, numberTwo) {
    switch (inputOperator) {
        case '+':
            return add(numberOne , numberTwo);
            break;

        case '-':
            return subtract(numberOne , numberTwo);
            break;

        case '*':
            return multiply(numberOne , numberTwo);
            break;

        case '/':
            return divide(numberOne , numberTwo);
            break;
    }
}


let display = document.querySelector('#display');

const numberBtns = document.querySelectorAll('.number-button');
numberBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (stagedNumber == '0') {
            display.textContent = null
        }
        display.textContent += event.target.textContent;
        stagedNumber += event.target.textContent;
    })
});


let clearBtn = document.querySelector('#clear-button');

clearBtn.addEventListener('click', event => {
    display.textContent = 0;
    stagedNumber = 0;
    operandOneStored = false;
    operatorStored = false;
});


const functionBtns = document.querySelectorAll('.functional-button');

functionBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (operandOneStored && operatorStored) {
            let result = operate(operator, operandOne, stagedNumber);
            display.textContent = result;
            operandOne = result;
            operator = event.target.textContent;
            stagedNumber = 0;
            return false;
        }

        if (!operandOneStored) {
            operandOne = stagedNumber;
            operator = event.target.textContent;
            operandOneStored = true;
            operatorStored = true;
            stagedNumber = 0;
        }

        if (!operatorStored) {
            operator = event.target.textContent;
            operatorStored = true;
        }
    })
});


const equalsBtn = document.querySelector('#equals-button');

equalsBtn.addEventListener('click', event => {
    if (operandOneStored) {
        let result = operate(operator, operandOne, stagedNumber);
        display.textContent = result;
        operandOne = result;
        stagedNumber = 0;
        operator = null;
        operatorStored = false;
    }
});

// operandOneStored = false
// operatorStored = false 

// Type numbers
    // If (stagedNumber == 0):
        // Clear display
    // Show on display and store into stagedNumber

// Press function (+-*/)
    // If (operandOneStored && operatorStored):
        // Operate with operandOne, operator, and current stagedNumber
        // Display = result
        // result = operandOne
        // Make operator new updated operator on this press
        // stagedNumber = 0
        // break
    // If !(operandOneStored):
        // Store stagedNumber into operandOne, store function into operator
        // operandOneStored = true
        // operatorStored = true
        // stagedNumber = 0
    // If !(operatorStored):
        // Store button pressed into operator
        // operatorStored = true

// Press Equals
    // If (operandOneStored):
        // Operate with operandOne, operator, and current stagedNumber
        // Show result on display
        // Store result into operandOne
        // stagedNumber = 0
        // operator = null
        // operatorStored = false