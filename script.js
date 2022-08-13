"use strict";

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
