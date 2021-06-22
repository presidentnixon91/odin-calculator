// MATHEMATICAL FUNCTIONS
// Add
function add(c,d) {
    currentValue = c + d;
    if(currentValue % 1 == 0) {
        currentDisplay.innerHTML = currentValue;
    } else {
        currentValue = currentValue.toFixed(4);
        currentDisplay.innerHTML = currentValue;
    }
    oldValue = currentValue;
}
// Subtract
function subtract(c,d) {
    currentValue = c - d;
    if(currentValue % 1 == 0) {
        currentDisplay.innerHTML = currentValue;
    } else {
        currentValue = currentValue.toFixed(4);
        currentDisplay.innerHTML = currentValue;
    }
    oldValue = currentValue;
}
// Multiply
function multiply(c,d) {
    currentValue = c * d;
    if(currentValue % 1 == 0) {
        currentDisplay.innerHTML = currentValue;
    } else {
        currentValue = currentValue.toFixed(4);
        currentDisplay.innerHTML = currentValue;
    }
    oldValue = currentValue;
}
// Divide
function divide(c,d) {
    currentValue = c / d;
    // Check if user is trying to divide by zero
    if(c == 0 || d == 0) {
        currentDisplay.innerHTML = "Do better";
    } else if(currentValue % 1 == 0) {
        currentDisplay.innerHTML = currentValue;
    } else {
        currentValue = currentValue.toFixed(4);
        currentDisplay.innerHTML = currentValue;
    }
    oldValue = currentValue;
}

// Values for storing numbers
let calcUsed = false;
let oldValue;
let currentValue;
let operatorChoice;
let operatorUsed = false;
let decimalUsed = false;

let currentDisplay = document.querySelector('#calc-input-field');

// Events for clicking number button
let calcNumberButtons = document.querySelectorAll('.calc-number a');
calcNumberButtons.forEach((btn) =>  {
    // Event listener for each button
    btn.addEventListener('click', (e) => {
        let temp = e.target.innerHTML;
        // Use whatever number was clicked on to add to display
        // Check if decimal has already been used
        if(temp == '.') {
            if(decimalUsed) {
                return;
            } else {
                decimalUsed = true;
            }
        }
        addNumber(temp);
    });
});

// Populate input field on button press
function addNumber(a) {
    // If a number is already there, add to it
    if(calcUsed) {
        currentValue = currentDisplay.innerHTML + a;
        currentDisplay.innerHTML = currentValue;
    // Otherwise replace it
    } else {
        currentDisplay.innerHTML = a;
        currentValue = a;
        calcUsed = true;
    }
}

// Operators events
let operatorButtons = document.querySelectorAll('.calc-operator');
operatorButtons.forEach((operatorBtn) => {
    // Event listeners for each operator
    operatorBtn.addEventListener('click', () => {
        // Take the ID to use as what function to run
        if(operatorUsed) {
            operate(operatorChoice, oldValue, currentValue);
            calcUsed = false;
            operatorChoice = operatorBtn.getAttribute('id');
        } else if(calcUsed) {
            operatorChoice = operatorBtn.getAttribute('id');
            // Store the number as old value
            oldValue = currentValue;
            // Reset calc to use new number
            calcUsed = false;
            operatorUsed = true;
        } else {
            operatorChoice = operatorBtn.getAttribute('id');
        }
        // Allow decimal to be used again
        decimalUsed = false;
    })
});

// Operate using value taken from ID of operator button
function operate(operator,a,b) {
    let operatorName = operator;
    // Make sure the numbers are stored as integers
    a = Number(oldValue);
    b = Number(currentValue);
    // Run the function using the string value of operator
    window[operatorName](a,b);
    calcUsed = false;
}

// Equals - Calculate the two numbers using operator
let equalsButton = document.querySelector('#equals a');
equalsButton.addEventListener('click', function() {
    // Check if the calculator has been used
    if(calcUsed) {
        // Run the operator using the button clicked
        operate(operatorChoice,oldValue,currentValue);
        operatorUsed = false;
    }
    // Allow decimal to be used again
    decimalUsed = false;
});

// Clear calculator
// Listen for clear button clicked
let clearButton = document.querySelector('#clear a');
clearButton.addEventListener('click', function() {
    oldValue = 0;
    currentValue = 0;
    currentDisplay.innerHTML = currentValue;
    calcUsed = false;
    operatorUsed = false;
    decimalUsed = false;
});