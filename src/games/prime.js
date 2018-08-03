import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import beginGame from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  } return true;
};

const getData = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => beginGame(description, getData);
