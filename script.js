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
,   operator
,   operandOneStored = false
,   operatorStored = false
,   stagedNumber = 0;

const updatingOperation = document.querySelector('#updating-operation');

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
            if (numberTwo === '0' || numberTwo === Number('0')) {
                return 'Error';
            }
            return divide(numberOne , numberTwo);
            break;
    }
}


let display = document.querySelector('#display');

const numberBtns = document.querySelectorAll('.number-button');
numberBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (operandOneStored && !operatorStored) {
            return false;
        }
        if (stagedNumber == '0') {
            display.textContent = null;
            stagedNumber = '';
        }
        if ((typeof stagedNumber) == String) {
            display.textContent = Number(display.textContent + event.target.textContent);
            stagedNumber = Number(stagedNumber + event.target.textContent);
            return false;
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
    updatingOperation.textContent = '';
});


const functionBtns = document.querySelectorAll('.functional-button');

functionBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (operandOneStored && operatorStored) {
            let result = operate(operator, operandOne, stagedNumber);
            if (result % 1 !== 0 && result.toString().split('.')[1].length > 3) {
                result = parseFloat(result.toFixed(3));
            }
            display.textContent = result;
            operandOne = result;
            operator = event.target.textContent;
            updatingOperation.textContent = `${operandOne} ${operator}`;
            stagedNumber = 0;
            return false;
        }

        if (!operandOneStored) {
            operandOne = stagedNumber;
            operator = event.target.textContent;
            updatingOperation.textContent = `${operandOne} ${operator}`;
            display.textContent = 0;
            operandOneStored = true;
            operatorStored = true;
            stagedNumber = 0;
        }

        if (!operatorStored) {
            operator = event.target.textContent;
            operatorStored = true;
            updatingOperation.textContent = `${operandOne} ${operator}`;
            display.textContent = 0;
        }
    })
});


const decimalBtn = document.querySelector('#decimal-button');

decimalBtn.addEventListener('click', event => {
    if ((stagedNumber % 1) != 0 || (display.textContent % 1) != 0) {
        return false;
    }
    if (operandOneStored && stagedNumber === 0) {
        stagedNumber = operandOne + '.';
        display.textContent += '.';
        operandOne = null;
        operandOneStored = false;
    } else {
        stagedNumber += '.';
        display.textContent += '.';
        

}});


const equalsBtn = document.querySelector('#equals-button');

equalsBtn.addEventListener('click', event => {
    if (operandOneStored && operatorStored) {
        updatingOperation.textContent = `${operandOne} ${operator} ${stagedNumber}`;
        let result = operate(operator, operandOne, stagedNumber);
        if (result === 'Error') {
            display.textContent = result;
            stagedNumber = 0;
            operator = null;
            operatorStored = false;
            return false;
        }
        if (result % 1 !== 0 && result.toString().split('.')[1].length > 3) {
            result = parseFloat(result.toFixed(3));
        }
        display.textContent = result;
        operandOne = result;
        stagedNumber = 0;
        operator = null;
        operatorStored = false;
    }
});