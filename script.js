'use strict';

const randomNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = randomNumber;

let score = 10;

//Manipula el boton "Check" y el numero que ingresamos lo pasa a Integer
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //No hay input
    if(!guess){
        document.querySelector('.message').textContent = "🚫No Number!";

    //Jugador Gana
    } else if (guess === randomNumber){
        document.querySelector('.message').textContent = '🎉Correct Number!';

        //Cambia el color de fondo a verde cuando se gana
        document.querySelector('body').style.backgroundColor = '#60b347';

        //Expande el cuadro blanco cuando se gana
        document.querySelector('.number').style.width = '30rem';


    //Numero mas alto
    } else if (guess > randomNumber){

        //Va reduciendo score
        if(score > 0){
            document.querySelector('.message').textContent = "📈Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        //Score llega a 0
        } else {
            document.querySelector('.message').textContent = "💀Game Over!";
            document.querySelector('.score').textContent = 0;
            //Cambia el color de fondo a rojo cuando se gana
            document.querySelector('body').style.backgroundColor = '#ff4d4d';
        }

    //Numero mas bajo
    } else if(guess < randomNumber){

        //Va reduciendo score
        if(score > 0){
            document.querySelector('.message').textContent = "📉Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        //Score llega a 0
        } else {
            document.querySelector('.message').textContent = "💀Game Over!";
            document.querySelector('.score').textContent = 0;
            //Cambia el color de fondo a rojo cuando se gana
            document.querySelector('body').style.backgroundColor = '#ff4d4d';
        }
    }
});