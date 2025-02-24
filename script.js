// 1. Get DOM elements
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const guessesDisplay = document.getElementById('guesses');
const hintDisplay = document.getElementById('hint');

// 2. Initialize game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

// 3. Function to check the user's guess
function checkGuess() {
  // 4. Get and convert the input to a number
  const userGuess = Number(guessInput.value);
  
  // 5. Validate the input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a number between 1 and 100!';
    return;
  }
  
  // 6. Increment guess counter
  guessCount++;
  guessesDisplay.textContent = `Guesses: ${guessCount}`;
  
  // 7. Compare the guess to the random number
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You got it in ${guessCount} guesses!`;
    hintDisplay.textContent = 'You won!';
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    updateHint(userGuess);
  } else {
    message.textContent = 'Too high! Try again.';
    updateHint(userGuess);
  }
  
  // 8. Clear the input
  guessInput.value = '';
}

// 9. Function to update hints
function updateHint(userGuess) {
  if (guessCount === 1) {
    hintDisplay.textContent = 'Hint: It’s between 1 and 100.';
  } else if (Math.abs(userGuess - randomNumber) <= 10) {
    hintDisplay.textContent = 'Hint: You’re super close (within 10)!';
  } else if (userGuess < randomNumber) {
    hintDisplay.textContent = `Hint: Try a number higher than ${userGuess}.`;
  } else {
    hintDisplay.textContent = `Hint: Try a number lower than ${userGuess}.`;
  }
}

// 10. Function to start a new game
function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  guessesDisplay.textContent = 'Guesses: 0';
  message.textContent = '';
  hintDisplay.textContent = 'Hint: Start guessing!';
  guessInput.value = '';
  guessInput.disabled = false;
}

// 11. Allow Enter key to submit guess
guessInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});