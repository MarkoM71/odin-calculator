let currentValue = "";
let previousValue = "";
let operator = "";

const previousDisplayValue = document.querySelector(".previousValue");
const currentDisplayValue = document.querySelector(".currentValue");

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");


equal.addEventListener("click", () => {
  if (currentValue != "" && previousValue != "") {
    calculate();
  }
});

decimal.addEventListener("click", () => {
  addDecimal();
});

clear.addEventListener("click", clearCalculator);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (previousValue !== "" && currentValue !== "" && operator === "") {
    previousValue = "";
    currentDisplayValue.textContent = currentValue;
  }
  if (currentValue.length <= 11) {
    currentValue += number;
    currentDisplayValue.textContent = currentValue;
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  if (previousValue === "") {
    previousValue = currentValue;
    operatorCheck(op);
  }
  else if (currentValue === "") {
    operatorCheck(op);
  }
  else {
    calculate();
    operator = op;
    currentDisplayValue.textContent = "0";
    previousDisplayValue.textContent = previousValue + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousDisplayValue.textContent = previousValue + " " + operator;
  currentDisplayValue.textContent = "0";
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  }
  else if (operator === "-") {
    previousValue -= currentValue;
  }
  else if (operator === "x") {
    previousValue *= currentValue;
  }
  else if (operator === "/") {
    if (currentValue <= 0) {
      previousValue = "Error";
      displayResults();
      return;
    }
    previousValue /= currentValue;
  }
  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  displayResults();
}

function roundNumber(num) {
  return Math.round(num * 10000000) / 10000000;
}

function displayResults() {
  if (previousValue.length <= 11) {
    currentDisplayValue.textContent = previousValue;
  }
  else {
    currentDisplayValue.textContent = previousValue.slice(0, 11) + "...";
  }
  previousDisplayValue.textContent = "";
  operator = "";
  currentValue = "";
}

function clearCalculator() {
  currentValue = "";
  previousValue = "";
  operator = "";
  currentDisplayValue.textContent = "0";
  previousDisplayValue.textContent = "";
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
    currentDisplayValue.textContent = currentValue;
  }
}
