import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import beginGame from '..';

const description = 'Balance the given number.';

const sumofDigits = (value) => {
  let sum = 0;
  const numToString = String(value);

  for (let i = 0; i < numToString.length; i += 1) {
    sum += +numToString[i];
  }

  return sum;
};

const balancedNumber = (value) => {
  let sum = sumofDigits(value);
  const numToString = String(value);
  let balanced = '';

  for (let i = numToString.length; i > 0; i -= 1) {
    balanced += Math.floor(sum / i);
    sum -= Math.floor(sum / i);
  }

  return balanced;
};

const getData = () => {
  const question = getRandomNumber(100, 10000);
  const answer = balancedNumber(question);
  return cons(question, String(answer));
};

export default () => beginGame(description, getData);
