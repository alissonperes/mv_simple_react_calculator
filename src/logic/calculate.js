import operate from './operate';

const calculate = (calculatorObject, buttonName) => {
  let { total, next, operation } = calculatorObject;
  const operations = ['+', '-', 'x', '÷', '%'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  if (numbers.indexOf(buttonName) > -1) {
    if (total === null) {
      total = buttonName;
    } else if (operation === null) {
      if (buttonName !== '.') {
        total += buttonName;
      } else {
        total = total.includes('.') ? total : total + buttonName;
      }
    } else if (next === null) {
      next = buttonName;
    } else if (buttonName !== '.') {
      next += buttonName;
    } else {
      next = next.includes('.') ? next : next + buttonName;
    }
  }

  if (operations.indexOf(buttonName) > -1) {
    if (total !== null) {
      operation = buttonName;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    operation = null;
    next = null;
  }

  if (buttonName === '+/-') {
    if (total !== null) total *= -1;
    if (next !== null) next *= -1;
  }

  if (buttonName === '=') {
    if (total !== null && next !== null && operation !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
