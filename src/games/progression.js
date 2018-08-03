import { cons } from 'hexlet-pairs';
import beginGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in this progression?';

const createProgression = (first, step, hiddenPosition) => {
  let result = '';
  const iter = (counter, acc) => {
    if (counter > 10) {
      return result;
    }
    result += (counter === hiddenPosition) ? '.. ' : `${acc} `;
    return iter(counter + 1, acc + step);
  };
  return iter(1, first);
};

const getData = () => {
  const firstPosition = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 15);
  const missedPosition = getRandomNumber(1, 11);
  const question = createProgression(firstPosition, progressionStep, missedPosition);
  const answer = progressionStep * (missedPosition - 1) + firstPosition;
  return cons(question, String(answer));
};

export default () => beginGame(description, getData);
