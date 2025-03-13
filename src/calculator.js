let history = [];

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (operation, a, b) => {
  let result;
  switch (operation) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    default:
      result = NaN;
  }

  history.push({ operation, a, b, result });
  return result;
};

const getHistory = () => {
  return history;
};

const clearHistory = () => {
  history = [];
};

module.exports = { add, subtract, multiply, divide, calculate, getHistory, clearHistory };