function add(a , b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {
    return a / b;
}

let operandOne
,   operandTwo
,   operator;

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case '+':
            add(numberOne , numberTwo);
            break;

        case '-':
            subtract(numberOne , numberTwo);
            break;

        case '*':
            multiply(numberOne , numberTwo);
            break;

        case '/':
            divide(numberOne , numberTwo);
            break;
    }
}


let displayValue = document.querySelector('#current-operation');

const numberBtns = document.querySelectorAll('.number-button');
numberBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (displayValue.textContent === '0') {displayValue.textContent = null}
        displayValue.textContent += event.target.textContent;
        console.log(displayValue);
    })
}
)


let clearBtn = document.querySelector('#clear-button');

clearBtn.addEventListener('click', event => {
    displayValue.textContent = 0;
})


const functionBtns = document.querySelectorAll('.functional-button');

functionBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        operandOne = displayValue.textContent;
        operator = String(event.target.textContent);
        displayValue.textContent = 0;
    })
})