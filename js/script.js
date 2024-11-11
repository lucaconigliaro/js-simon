const firstDivElem = document.getElementById("div");
const startBtnElem = document.getElementById("start-button");
const countdownElem = document.getElementById("countdown");
const numbersElem = document.getElementById("numbers");
const formElem = document.getElementById("form");
const resultElem = document.getElementById("result");
const retryBtnElem = document.getElementById("retry-button");
const submitBtnElem = document.getElementById("submit-button")


//Creo la funzione attraverso la quale attivo il countdown cliccando sul bottone, genero 5 numeri random da inserire nell'array 
//usando l'intervallo nascondo la prima schermata e mostro la seconda
let counter = 10;
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

//Creo funzione attraverso la quale i numeri scritti vengono scritti in una nuova array che verrà messa a paragone con la precendete 
//e li mette a paragone, generando il risultato

const userNums = [];
const correctNums = []; 

formElem.addEventListener("submit", function(event){
    event.preventDefault();
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const num3 = document.getElementById("num3").value.trim();
    const num4 = document.getElementById("num4").value.trim();
    const num5 = document.getElementById("num5").value.trim();
    userNums.push(parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4), parseInt(num5));
    // console.log(userNums);
    for (let i = 0; i < userNums.length; i++) {
        curItem = userNums[i];
        if (randomNumElem.includes(curItem)) {
            correctNums.push(curItem);
        }
    }
    // console.log(correctNums);
    resultElem.classList.remove("d-none");
    resultElem.innerHTML = `Hai indovinato ${correctNums.length} numeri (${correctNums})`;
});

retryBtnElem.addEventListener("click", function() {
    document.location.reload();
});

//Genero numeri random
function randomNum(min, max) {
    return (Math.floor(Math.random() *(max - min) + min));
}