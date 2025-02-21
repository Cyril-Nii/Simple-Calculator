function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function validateInput(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input: both arguments must be numbers.");
    }
}

function calculate(operation, a, b) {
    validateInput(a, b);
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error("Invalid operation. Available operations: add, subtract, multiply, divide.");
    }
}
