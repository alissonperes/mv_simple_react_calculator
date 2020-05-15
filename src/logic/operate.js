import Big from 'big.js'; // eslint-disable-line

const operate = (numberOne, numberTwo, operand) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
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

export default operate;
