// Generate a random number between 1 and 100
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Counter for guesses
let guesses = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessField').value);
  const message = document.getElementById('message');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = 'Invalid guess. Please enter a number between 1 and 10.';
    return;
  }

  guesses++;

  if (userGuess === correctNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${correctNumber} in ${guesses} guesses!`;
    message.style.color = 'green';
    document.getElementById('guessField').setAttribute('disabled', 'true');
  } else if (userGuess < correctNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
}