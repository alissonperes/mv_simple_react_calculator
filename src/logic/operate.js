import Big from 'big.js';

const operate = (numberOne, numberTwo, operand) => {
  numOne = Big(numberOne);
  numTwo = Big(numberTwo);
  let result;
  switch (operand) {
    case '+':
      // .plus
      result = numOne.plus(numTwo).toString();
      break;
    case '-':
      // .minus
      result = numOne.minus(numTwo).toString();
      break;
    case '*':
      // .times
      result = numOne.times(numTwo).toString();
      break;
    case '÷':
      // .div
      result = numOne.div(numTwo).toString();
      break;
    default:
      break;
  }
  return result;
};

// export default operate;

const calc = { total: 5, next: 2, operation: '+' };
console.log(operate(calc));
