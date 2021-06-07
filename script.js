// MATHEMATICAL FUNCTIONS
// Add
function add(a,b) {
    return a + b;
}
// Subtract
function subtract(a,b) {
    return a - b;
}
// Multiply
function multiple(a,b) {
    return a * b;
}
// Divide
function divide(a,b) {
    return a / b;
}
// Operate
function operate(operator,a,b) {
    operator(a,b);
}
// Values for storing numbers
let calcUsed = false;
let currentValue;
// Populate input field on button press
function addNumber(a) {
    let currentDisplay = document.querySelector('#calc-input-field');
    if(calcUsed) {
        currentValue = currentDisplay.innerHTML + a;
        currentDisplay.innerHTML = currentValue;
    } else {
        currentDisplay.innerHTML = a;
        calcUsed = true;
    }
}
// Events for clicking button
let calcNumberButtons = document.querySelectorAll('.calc-number a');
calcNumberButtons.forEach((btn) =>  {
    // Event listener for each button
    btn.addEventListener('click', (e) => {
        let temp = e.target.innerHTML;
        addNumber(temp);
    });
})
