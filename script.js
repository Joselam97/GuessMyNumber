'use strict';

let randomNumber = Math.trunc(Math.random()*20) + 1;
let score = 15;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

//Manipula el boton "Again"
document.querySelector('.again').addEventListener('click', function(){
    //Usa los valores como referencia
    score = 15;
    randomNumber = Math.trunc(Math.random()*20) + 1;

    //Regresa los mensajes y valores a la normalidad
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

    //Cambia el estilo a la normalidad
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

//Manipula el boton "Check"
document.querySelector('.check').addEventListener('click', function(){
    //El numero que ingresamos lo pasa a Integer
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //No hay input
    if(!guess){
        displayMessage("🚫 No Number!");

    //Cuando guess es Correcto
    } else if (guess === randomNumber){
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = randomNumber;

        //Cambia el color de fondo a verde cuando se gana
        document.querySelector('body').style.backgroundColor = '#60b347';

        //Expande el cuadro blanco cuando se gana
        document.querySelector('.number').style.width = '30rem';

        //Logica para el HighScore
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //Cuando guess es Incorrecto
    } else if(guess !== randomNumber) {
        //Operador tenario para enviar mensajes
        if(score > 1){
            document.querySelector('.message').textContent = guess > randomNumber ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        //Score llega a 0
        } else {
            displayMessage("💀 Game Over!");
            document.querySelector('.score').textContent = 0;
            //Cambia el color de fondo a rojo cuando se gana
            document.querySelector('body').style.backgroundColor = '#ff4d4d';
        }
    }

});