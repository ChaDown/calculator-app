"use strict";

const btnContainer = document.querySelector(".btn-container");
const displayMain = document.querySelector(".display-main");
const displayTop = document.querySelector(".display-top");
const numbers = document.querySelectorAll(".number");
const btnAdd = document.querySelector(".btn-add");
const btnSub = document.querySelector(".btn-sub");
const btnMult = document.querySelector(".btn-mul");
const btnDot = document.querySelector(".btn-dot");
const btnDiv = document.querySelector(".btn-div");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");
const btnDelete = document.querySelector(".btn-delete");
const operatorsArr = [btnAdd, btnSub, btnMult, btnDiv];

const addFunction = function (a, b) {
  return a + b;
};

const subtractFunction = function (a, b) {
  return a - b;
};

const multiplyFunction = function (a, b) {
  return a * b;
};

const divideFunction = function (a, b) {
  if (b == 0) {
    return alert("You can't divide by 0 in this universe buddy!");
  }
  return a / b;
};

const operate = function (operator, a, b) {
  if (operator === "+") return addFunction(a, b);
  if (operator === "-") return subtractFunction(a, b);
  if (operator === "x") return multiplyFunction(a, b);
  if (operator === "÷") return divideFunction(a, b);
};

const renderDisplay = function (value) {
  displayMain.textContent += value;
};

const renderBtnPress = function () {
  for (const num of numbers) {
    num.addEventListener("click", () => renderDisplay(num.textContent), {
      ...(num.textContent === "." && { once: true }),
    });
  }
};

let valueA, operator, valueB;

// Get the value of the display and the operator and display it in the top display.
const renderOperation = function () {
  for (const btn of operatorsArr) {
    btn.addEventListener("click", () => {
      // Step 1 = If there is nothing in the top display we want to put the bottom display and the operator there when an operator is pressed.

      if (!displayTop.textContent) {
        operator = btn.textContent;
        displayTop.textContent = `${displayMain.textContent} ${operator}`;
        valueA = +displayMain.textContent;
        displayMain.textContent = "";
      }

      // Step 2 = If there is something alread there, we want to compute the operation in the top display and then display the result and the new operator there!
      else {
        valueB = +displayMain.textContent;
        valueA = +displayTop.textContent.slice(0, -2);
        const operatorPrev = displayTop.textContent.slice(-1);
        const operatorNew = btn.textContent;
        console.log(valueA, valueB);
        displayTop.textContent = `${operate(
          operatorPrev,
          valueA,
          valueB
        )} ${operatorNew}`;
        displayMain.textContent = "";
      }
    });
  }
};

renderBtnPress();
renderOperation();

btnEqual.addEventListener("click", () => {
  valueA = +displayTop.textContent.slice(0, -2);
  operator = displayTop.textContent.slice(-1);
  valueB = +displayMain.textContent;
  displayMain.textContent = operate(operator, +valueA, +valueB);
  displayTop.textContent = "";
});

btnClear.addEventListener("click", () => {
  displayMain.textContent = "";
  displayTop.textContent = "";
});

btnDelete.addEventListener(
  "click",
  () => (displayMain.textContent = displayMain.textContent.slice(0, -1))
);
