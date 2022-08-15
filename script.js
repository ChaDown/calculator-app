"use strict";

const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const btnAdd = document.querySelector("btn-add");
const btnSub = document.querySelector("btn-sub");
const btnMult = document.querySelector("btn-mul");
const btnDot = document.querySelector("btn-dot");
const btnDiv = document.querySelector("btn-div");
const btnEqual = document.querySelector("btn-equal");

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
  return a / b;
};

const operate = function (operator, a, b) {
  if (operator === "+") return addFunction(a, b);
  if (operator === "-") return subtractFunction(a, b);
  if (operator === "*") return multiplyFunction(a, b);
  if (operator === "/") return divideFunction(a, b);
};

const renderDisplay = function (btn) {
  display.textContent += btn;
};

const renderBtnPress = function () {
  for (const num of numbers) {
    num.addEventListener("click", () => renderDisplay(num.textContent), {
      ...(num.textContent === "." && { once: true }),
    });
  }
};

renderBtnPress();
