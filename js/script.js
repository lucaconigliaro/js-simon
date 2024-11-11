const firstDivElem = document.getElementById("div");
const startBtnElem = document.getElementById("start-button");
const countdownElem = document.getElementById("countdown");
const numbersElem = document.getElementById("numbers");
const formElem = document.getElementById("form");
const resultElem = document.getElementById("result");


//Creo la funzione attraverso la quale attivo il countdown cliccando sul bottone, genero 5 numeri random da inserire nell'array 
//usando l'intervallo nascondo la prima schermata e mostro la seconda
let counter = 3;
let intervalId = null;
const randomNumElem = [];
startBtnElem.addEventListener("click", function() {
    if (intervalId === null) {
        for (let i = 0; i < 5; i++) {
            const number = randomNum(1, 99);
            randomNumElem.push(number);
            const curNum = randomNumElem[i];
            numbersElem.innerHTML += `<div class="btn btn-lg btn-outline-primary">${curNum}</div>`;
        }
        intervalId = setInterval(function(){
            counter--;
            countdownElem.innerHTML = counter;
            if (counter < 0) {
                clearInterval(intervalId);
                intervalId = null;
                firstDivElem.classList.add("d-none");
                formElem.classList.remove("d-none");
            }
        }, 1000);
    }
})

//Genero numeri random
function randomNum(min, max) {
    return (Math.floor(Math.random() *(max - min) + min));
}