// Generera ett slumpmässigt nummer mellan 1 och 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Välj HTML-element
const submitGuessButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guess');
const resultText = document.getElementById('result');

// Lägg till en händelselyssnare på knappen
submitGuessButton.addEventListener('click', checkGuess);

// Funktion för att kontrollera gissningen
function checkGuess() {
    // Hämta gissningen från inputfältet
    const guess = parseInt(guessInput.value);

    // Kontrollera om gissningen är giltig
    if (isNaN(guess) || guess < 1 || guess > 10) {
        resultText.textContent = 'Ogiltigt gissning. Försök igen med ett nummer mellan 1 och 10.';
        return;
    }

    // Kontrollera om gissningen är rätt
    if (guess === randomNumber) {
        resultText.textContent = `Grattis, du gissade rätt! Rätt nummer är ${randomNumber}.`;
        submitGuessButton.disabled = true; // Inaktivera knappen
    } else if (guess < randomNumber) {
        resultText.textContent = 'För lågt, försök igen.';
    } else {
        resultText.textContent = 'För högt, försök igen.';
    }

    // Rensa inputfältet
    guessInput.value = '';
}