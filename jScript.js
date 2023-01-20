const buttonChoices = document.querySelectorAll('button');
const buttonChoiceDisplay = document.getElementById('text-screen')
const buttonSelected = [];
let buttonSelectedText = "";


buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
    
    buttonSelected.push(e.target.id);
    buttonSelectedText = buttonSelected.toString(" ");
    buttonChoiceDisplay.innerHTML = buttonSelectedText;
}))








function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//console.log(add(7, 10));


function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
}

//console.log(subtract(10, 7));


function multiply(num1, num2) {
    let multiplication = num1 * num2;
    return multiplication;
}

//console.log((multiply(10, 7)));


function divide(num1, num2) {
    let division = num1 / num2;
    return division;
}

//console.log((divide(12, 6)));

//Create Operate Function
function operator(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    }

    else if (operator === '-') {
        return subtract(num1, num2);
    }

    else if (operator === '*') {
        return multiply(num1, num2);
    }

    else if (operator === '/') {
        return divide(num1, num2);
    }
}

//console.log(operator(10, 7, '+'));
//console.log(operator(10, 7, '-'));
//console.log(operator(10, 7, '*'));
//console.log(operator(12, 6, '/'));