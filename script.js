// MATHEMATICAL FUNCTIONS
// Add
function add(c,d) {
    currentValue = c + d;
    oldValue = currentValue;
    currentDisplay.innerHTML = currentValue.toFixed(6);
}
// Subtract
function subtract(c,d) {
    currentValue = c - d;
    oldValue = currentValue;
    currentDisplay.innerHTML = currentValue.toFixed(6);
}
// Multiply
function multiply(c,d) {
    currentValue = c * d;
    oldValue = currentValue;
    currentDisplay.innerHTML = currentValue.toFixed(6);
}
// Divide
function divide(c,d) {
    currentValue = c / d;
    oldValue = currentValue;
    currentDisplay.innerHTML = currentValue.toFixed(6);
}

// Values for storing numbers
let calcUsed = false;
let oldValue;
let currentValue;
let operatorChoice;
let operatorUsed = false;

let currentDisplay = document.querySelector('#calc-input-field');

// Events for clicking number button
let calcNumberButtons = document.querySelectorAll('.calc-number a');
calcNumberButtons.forEach((btn) =>  {
    // Event listener for each button
    btn.addEventListener('click', (e) => {
        let temp = e.target.innerHTML;
        // Use whatever number was clicked on to add to display
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
            oldValue = 0;
        }
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
}

// Calculate the two numbers using operator
let equalsButton = document.querySelector('#equals a');
equalsButton.addEventListener('click', function() {
    // Run the operator using the button clicked
    operate(operatorChoice,oldValue,currentValue);
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
});