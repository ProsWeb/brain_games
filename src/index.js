import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

const beginGame = (gameRules, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < rounds; i += 1) {
    const questionAndAnswer = getData();
    const question = car(questionAndAnswer);
    const rightAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default beginGame;
