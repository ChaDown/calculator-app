"use strict";

const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const btn1 = document.querySelector("btn-1");
const btn2 = document.querySelector("btn-2");
const btn3 = document.querySelector("btn-3");
const btn4 = document.querySelector("btn-4");
const btn5 = document.querySelector("btn-5");
const btn6 = document.querySelector("btn-6");
const btn7 = document.querySelector("btn-7");
const btn8 = document.querySelector("btn-8");
const btn9 = document.querySelector("btn-9");
const btn0 = document.querySelector("btn-0");
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
