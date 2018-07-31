import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0);
const GetRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;


const startGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const question = GetRandomNumber();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    if (rightAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
