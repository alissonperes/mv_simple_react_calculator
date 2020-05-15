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
    case 'x':
      // .times
      result = numOne.times(numTwo).toString();
      break;
    case '÷':
      // .div
      if (numberTwo === '0') {
        console.log(numOne, numTwo);
        result = 'Division by 0 error';
      } else {
        result = numOne.div(numTwo).toString();
      }
      break;
    default:
      break;
  }
  return result;
};

export default operate;
