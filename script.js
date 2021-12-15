const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const playTo = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

// player one button functionality
p1Button.addEventListener('click', () => {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

// player two button functionality
p2Button.addEventListener('click', () => {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

// Converts string to number in playTo selector and stores to variable
// REMINDER: this. doesn't work the same with arrow functions - need to use normal function syntax
playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

// reset button functionality
resetButton.addEventListener('click', reset);

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}