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
,   operator;

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
        display.textContent += event.target.textContent;
    })
});


let clearBtn = document.querySelector('#clear-button');

clearBtn.addEventListener('click', event => {
    display.textContent = 0;

});


const functionBtns = document.querySelectorAll('.functional-button');

functionBtns.forEach(btn => {
    btn.addEventListener('click', event => {
    
    })
});


const equalsBtn = document.querySelector('#equals-button');

equalsBtn.addEventListener('click', event => {

});

