import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import beginGame from '..';

const description = 'What is the result of the expression? ';
const getQuestionAndAnswer = (num1, num2, operand) => {
  switch (operand) {
    case 1:
      return cons(`${num1} + ${num2}`, String(num1 + num2));
    case 2:
      return cons(`${num1} - ${num2}`, String(num1 - num2));
    default:
      return cons(`${num1} * ${num2}`, String(num1 * num2));
  }
};
const getData = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operand = getRandomNumber(1, 4);
  return getQuestionAndAnswer(number1, number2, operand);
};
export default () => beginGame(description, getData);
