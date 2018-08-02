import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import beginGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => (num % 2 === 0);

const getData = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => beginGame(description, getData);
