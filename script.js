let display = document.getElementById('display');
function appendDigit(digit) {
    display.value += digit;
}
function appendOperator(op) {
    display.value += op;
}
function calculateResult() {
    display.value = eval(display.value);
}
function clearDisplay() {
    display.value = '';
}
function deleteDigit() {
    display.value = display.value.slice(0, -1);
}
