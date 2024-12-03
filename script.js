'use strict'; // Activates strict mode for better error handling and secure coding practices

// Generates a random number between 1 and 20
let randomNumber = Math.trunc(Math.random()*20) + 1;
let score = 15;
let highscore = 0;

// Function to display messages in the '.message' element
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Handles the "Again" button
document.querySelector('.again').addEventListener('click', function(){
    // Resets the values to their initial state
    score = 15;
    randomNumber = Math.trunc(Math.random()*20) + 1;

    // Resets messages and values to default
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

    // Resets styles to default
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// Handles the "Check" button
document.querySelector('.check').addEventListener('click', function(){
    // Converts the input number to an integer
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // If there is no input
    if(!guess){
        displayMessage("🚫 No Number!");

    // When the guess is correct
    } else if (guess === randomNumber){
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = randomNumber;

        // Changes background color to green when the user wins
        document.querySelector('body').style.backgroundColor = '#60b347';

        // Expands the white box when the user wins
        document.querySelector('.number').style.width = '30rem';

        // Updates the highscore logic
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When the guess is incorrect
    } else if(guess !== randomNumber) {
        // Ternary operator to send appropriate messages
        if(score > 1){
            document.querySelector('.message').textContent = guess > randomNumber ? "📈 Too High!" : "📉 Too Low!";
            score--; // Decreases the score
            document.querySelector('.score').textContent = score;

        // When the score reaches 0
        } else {
            displayMessage("💀 Game Over!");
            document.querySelector('.score').textContent = 0;
            // Changes background color to red when the game ends
            document.querySelector('body').style.backgroundColor = '#ff4d4d';
        }
    }

});