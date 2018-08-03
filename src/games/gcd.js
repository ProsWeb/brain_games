import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import beginGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const getData = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 100);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return cons(question, String(answer));
};

export default () => beginGame(description, getData);
