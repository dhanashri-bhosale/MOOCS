let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateOperationDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
    updateOperationDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
    updateOperationDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber || '0';
}

function updateOperationDisplay() {
    const operationDisplay = document.getElementById('operation-display');
    operationDisplay.innerText = `${previousNumber} ${operation || ''} ${currentNumber}`;
}

window.onload = () => {
    updateDisplay();
}
