let randomNumber = Math.floor( Math.random() * 100 ) + 1;

	const guesses = document.querySelector( '.guesses' );
	const lastResult = document.querySelector( '.lastResult' );
	const lowOrHi = document.querySelector( '.lowOrHi' );

	const guessSubmit = document.querySelector( '.guessSubmit' );
	const guessField = document.querySelector( '.guessField' );

	let guessCount = 1;
	let resetButton;
	guessField.focus();
	
function checkGuess() {
  let userGuess = Number( guessField.value );
  if ( guessCount === 1 ) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if ( userGuess === randomNumber ) {
    if ( guessCount > 1 ){
    lastResult.textContent = 'Congratulations! You got it right in ' + guessCount + ' guesses!';
    }
    if ( guessCount === 1 ){
    lastResult.textContent = 'Congratulations! You got it right in ' + guessCount + ' guess!';
    }
    lastResult.style.backgroundColor = 'green';
    // lowOrHi.textContent = '';
    setGameOver();
  } else if ( guessCount === 10 ) {
    lastResult.textContent = '!!!GAME OVER!!!  Correct number was ' + randomNumber;
    // lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if ( userGuess < randomNumber ) {
      lowOrHi.textContent = 'Guess number ' + guessCount;
	lowOrHi.textContent += ' Last guess was too low!';
	if ( guessCount === 9 ) {
		lowOrHi.textContent += ' One more guess to go!';
		lastResult.style.backgroundColor = 'blue';
	}
    } else if ( userGuess > randomNumber ) {
      lowOrHi.textContent = 'Guess number ' + guessCount + ' Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  lowOrHi.textContent = '';
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement( 'button' );
  resetButton.textContent = 'Start brand new game';
  document.body.append( resetButton );
  resetButton.addEventListener( 'click', resetGame );
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll ( '.resultParas p' );
  for ( let i = 0 ; i < resetParas.length ; i++ ) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild ( resetButton );

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor( Math.random() * 100 ) + 1;
}
