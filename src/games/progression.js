import { cons } from 'hexlet-pairs';
import beginGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in this progression?';

const createProgression = (first, step, hiddenPosition) => {
  let result = '';
  const iter = (progressionCurrentLength, acc) => {
    if (progressionCurrentLength === 10) {
      return result;
    }
    result += (progressionCurrentLength === hiddenPosition) ? '.. ' : `${acc} `;
    return iter(progressionCurrentLength + 1, acc + step);
  };
  return iter(0, first);
};

const getData = () => {
  const firstPosition = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 15);
  const hiddenPosition = getRandomNumber(1, 11);
  const question = createProgression(firstPosition, progressionStep, hiddenPosition);
  const answer = progressionStep * (hiddenPosition - 1) + firstPosition;
  return cons(question, String(answer));
};

export default () => beginGame(description, getData);
