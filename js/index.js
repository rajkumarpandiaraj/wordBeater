const displayWord = document.querySelector('#word');
const userTypedWord = document.querySelector('#input');
const displayTime = document.querySelector('#time-value'); 
const displayScore = document.querySelector('#score-value'); 
const form = document.querySelector('#form');
const message = document.querySelector('#message');
const start = document.querySelector('#start');
const tryAgain = document.querySelector('#try-again');


let time = 5;
let score = 0 ;
let clrInterval;
const words = [
    "javascript",
    "professional",
    "bootstrap",
    "laughter",
    "discipline",
    "environment",
    "oil",
    "jam",
    "something",
    "life",
    "love",
    "presentation",
    "perfect",
    "nature",
    "sun"
];


//Functions

function timefunc(){
    if(time > 0){
        time--;
        displayTime.innerHTML = time ;
    }else{
        message.innerHTML = 'Gamer over'
        tryAgain.style.display = 'block'
        clearInterval(clrInterval);

    }
}

function showWord(){
    const randomIndex = Math.floor(Math.random() * words.length);
    displayWord.innerHTML = words[randomIndex];
}


function startfunc(){
    showWord();
    clrInterval = setInterval(timefunc,1000);
    start.style.display = 'none';
}


function checkMatch(){
    if(userTypedWord.value == displayWord.textContent){
        message.innerHTML = 'correct!!'
        score++;
        displayScore.innerHTML = score;
        userTypedWord.value = '';
        time = 5;
        displayTime.innerHTML = time;
        showWord();
    }
}

function tryAgainfunc(){
    tryAgain.style.display = 'none'
    showWord();
    time = 5;
    displayTime.innerHTML = time;
    score = 0;
    displayScore.innerHTML = score;
    clrInterval = setInterval(timefunc,1000);
    message.innerHTML = '';
    userTypedWord.value = '';
}






// Event Listener

start.addEventListener('click',startfunc);

form.addEventListener('input',checkMatch);

tryAgain.addEventListener('click', tryAgainfunc);