// MATHEMATICAL FUNCTIONS
// Add
function add(c,d) {
    return c + d;
}
// Subtract
function subtract(c,d) {
    return c - d;
}
// Multiply
function multiple(c,d) {
    return c * d;
}
// Divide
function divide(c,d) {
    console.log(c / d);
}
// Operate using value taken from ID of operator button
function operate(operator,a,b) {
    console.log(operator);
    operator(a,b);
}
// Values for storing numbers
let calcUsed = false;
let oldValue;
let currentValue;
let operatorChoice;

let currentDisplay = document.querySelector('#calc-input-field');

// Populate input field on button press
function addNumber(a) {
    if(calcUsed) {
        currentValue = currentDisplay.innerHTML + a;
        currentDisplay.innerHTML = currentValue;
    } else {
        currentDisplay.innerHTML = a;
        currentValue = a;
        calcUsed = true;
    }
}
// Events for clicking number button
let calcNumberButtons = document.querySelectorAll('.calc-number a');
calcNumberButtons.forEach((btn) =>  {
    // Event listener for each button
    btn.addEventListener('click', (e) => {
        let temp = e.target.innerHTML;
        addNumber(temp);
    });
});
// Operators events
let operatorButtons = document.querySelectorAll('.calc-operator');
operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        operatorChoice = operatorBtn.getAttribute('id');
        if(calcUsed) {
            // Store the number on display as old value
            oldValue = currentValue;
            // Wipe the current value
            currentValue = 0;
            currentDisplay.innerHTML = currentValue;
            calcUsed = false;
        } else {
            oldValue = 0;
        }
        console.log(calcUsed);
        console.log(operatorChoice);
        console.log(oldValue);
        console.log(currentValue);
    })
});
// Calculate the two numbers using operator
let equalsButton = document.querySelector('#equals a');
equalsButton.addEventListener('click', function() {
    console.log(operatorChoice);
    console.log(oldValue);
    console.log(currentValue);
    let x = Number(oldValue);
    let y = Number(currentValue);
    operate(operatorChoice,x,y);
});