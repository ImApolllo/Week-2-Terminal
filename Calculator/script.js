var first = "";
var second = "";
var operator = "";
var opSet = false;

function press(num) {
    console.log(num);
    var line = document.querySelector('#display');
    if (!opSet) {
        first += num
        line.innerText = first;
    }else {
        second += num;
        line.innerText = second;
    }
}
function setOP(op) {
    if (op === '/') {
        operator = 'div'
    }
    if (op === '*') {
        operator = 'mul'
    }
    if (op === '-') {
        operator = 'sub'
    }
    if (op === '+') {
        operator = 'add'
    }
    opSet = true;
}
function clr() {
    var line = document.querySelector('#display');
    line.innerText = '0';
    first = '';
    second = '';
    setOP = false;
}
function calculate() {
    var output;
    console.log(first, second, operator);
    if (operator === 'div') {
        output = parseFloat(first) / parseFloat(second);
    }
    if (operator === 'mul') {
        output = parseFloat(first) * parseFloat(second);
    }
    if (operator === 'sub') {
        output = parseFloat(first) - parseFloat(second);
    }
    if (operator === 'add') {
        output = parseFloat(first) + parseFloat(second);
    }
    first = "" + output;
    second = '';
    console.log(first, output);
    var line = document.querySelector('#display');
    line.innerText = first;
}