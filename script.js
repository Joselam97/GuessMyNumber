'use strict';

const randomNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = "🚫No Number!";
    } else if (guess == randomNumber){
        document.querySelector('.message').textContent = '🎉Correct Number!';
    } else if (guess > randomNumber){
        document.querySelector('.message').textContent = "📈Too High!";
    } else if(guess < randomNumber){
        document.querySelector('.message').textContent = "📉Too Low!";
    }
});