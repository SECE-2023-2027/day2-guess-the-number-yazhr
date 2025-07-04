let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberDisplay = document.querySelector('.number-display');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const againBtn = document.querySelector('.again-btn');

checkBtn.addEventListener('click', function() {
    const guess = Number(guessInput.value);
    
    if (!guess) {
        message.textContent = 'No number!';
        return;
    }
    
    if (guess === secretNumber) {
        message.textContent = 'Correct Number!';
        numberDisplay.textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        numberDisplay.style.width = '140px';
        
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = `Highscore : ${highscore}`;
        }
    } else {
        if (score > 1) {
            message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            scoreDisplay.textContent = `Score : ${score}`;
        } else {
            message.textContent = 'You lost the game!';
            scoreDisplay.textContent = 'Score : 0';
        }
    }
});

againBtn.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    message.textContent = 'Start Guessing ...';
    scoreDisplay.textContent = `Score : ${score}`;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    document.body.style.backgroundColor = '#1f1f35';
    numberDisplay.style.width = '80px';
});