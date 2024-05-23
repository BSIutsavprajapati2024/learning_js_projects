let num = parseInt((Math.random()*100)+1);
console.log(num);
const submit = document.querySelector("#subt");
const user_input = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrhi");
const starOver = document.querySelector(".resultParas");
console.log(submit,user_input,guesses,remaining,lowOrhi,starOver);
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(user_input.value);
        validateGuess(guess);
        });
    }

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number");
    } else if (guess <1){
        alert("Please enter a number more than 1");
    } else if (guess >100){
        alert("Please enter a number less than 100");
    } else{
        prevGuess.push(guess);
        if (numGuess >= 10){
            displayGuess(guess);
            displayMessage(`😂Game Over, Random number was ${num}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === num){
        displayMessage("Congratulations!!! You guessed it right!!!");
        endGame();
    }else if(guess<num){
        displayMessage("😅Number is too low!!!");
    }else if(guess>num){
        displayMessage("😅Number is too high!!!");
    }
}

function displayGuess(guess){
    user_input.value = '';
    if (numGuess === 10){
    guesses.innerHTML += `${guess}`;
    } else{
    guesses.innerHTML += `${guess} ,`;
    }
    numGuess++;
    remaining.innerHTML =`${11 -numGuess}`;
}

function displayMessage(message){
    if(message === "Congratulations!!! You guessed it right!!!"){
        console.log(message,"if");
        lowOrhi.innerHTML = `<h3 style="display: inline-block; background-color: green; ">${message}</h3>`;
    } else {
        console.log(message,"else");
        lowOrhi.innerHTML = `<h3 style="display: inline-block; background-color: red; ">${message}</h3>`;
    }
}

function endGame(){
    user_input.vale = '';
    user_input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<input type="submit" id="newGame" value="Start New Game" style="background-color: #04AA6D;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 10px;
    border-style: none;">`;
    starOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const new_Game = document.querySelector("#newGame")
    new_Game.addEventListener('click', function(e){
        num = parseInt((Math.random()*100)+1);
        prevGuess = [];
        numGuess = 1;
        guesses.innerHTML = '';
        lowOrhi.innerHTML = '';
        remaining.innerHTML =`${11 - numGuess}`;
        user_input.removeAttribute('disabled');
        starOver.removeChild(p);
        playGame = true;
    })
}