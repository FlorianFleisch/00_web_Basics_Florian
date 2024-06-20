let inputField = document.getElementById("numbers");
let calculation = ' ';
let result = 0;

function calculate() {
    const inputField = document.getElementById('numbers');
    const calculation = inputField.value;
    try {
        const result = eval(calculation);
        inputField.value = result;
    } catch (e) {
        inputField.value = "Error";
    }
}

function one() {
    calculation += '1';
    inputField.value = calculation;
}

function two() {
    calculation += '2';
    inputField.value = calculation;
}

function three() {
    calculation += '3';
    inputField.value = calculation;
}

function four() {
    calculation += '4';
    inputField.value = calculation;
}

function five() {
    calculation += '5';
    inputField.value = calculation;
}

function six() {
    calculation += '6';
    inputField.value = calculation;
}

function seven() {
    calculation += '7';
    inputField.value = calculation;
}

function eight() {
    calculation += '8';
    inputField.value = calculation;
}

function nine() {
    calculation += '9';
    inputField.value = calculation;
}

function zero() {
    calculation += '0';
    inputField.value = calculation;
}


function reset() {
    calculation = ' ';
    inputField.value = calculation;
}

function plus() {
    calculation += '+';
    inputField.value = calculation;
}

function minus() {
    calculation += '+';
    inputField.value = calculation;
}

function multiplikation() {
    calculation += '*';
    inputField.value = calculation;
}

function division() {
    calculation += '/';
    inputField.value = calculation;
}



