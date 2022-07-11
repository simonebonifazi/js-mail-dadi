
//0. randomizzo i valori per noi e per il pc AL CLICK!!
let myResult = 0;
//Math.floor(Math.random() * 6) + 1;
console.log(myResult);
let cpuResult = 0;
//Math.floor(Math.random() * 6) + 1;
console.log(cpuResult);


//1. dichiaro variabili globali 
//bottone iniziale
const startGame = document.getElementById('start');
// esiti
const finalResult = document.getElementById('results');
//singoli dadi
const usOne = document.getElementById('us-one');
const usTwo = document.getElementById('us-two');
const usThree = document.getElementById('us-three');
const usFour = document.getElementById('us-four');
const usFive = document.getElementById('us-five');
const usSix = document.getElementById('us-six');

const cpuOne = document.getElementById('cpu-one');
const cpuTwo = document.getElementById('cpu-two');
const cpuThree = document.getElementById('cpu-three');
const cpuFour = document.getElementById('cpu-four');
const cpuFive = document.getElementById('cpu-five');
const cpuSix = document.getElementById('cpu-six');
//2. attivo al click il mio bottone
//reset con flag
let reset = false;

startGame.addEventListener('click', function () {
    reset = false
    //
    let myResult = Math.floor(Math.random() * 6) + 1;
    let cpuResult = Math.floor(Math.random() * 6) + 1;
    //rimuovo il d-none da results
    finalResult.classList.remove('d-none');
    //funziona; avanti.
    // adesso ad ogni valore del random aggiungo il corrispondente dado

    myResult == 1 ? usOne.classList.remove('d-none') : usOne.classList.add('d-none')
    myResult == 2 ? usTwo.classList.remove('d-none') : usTwo.classList.add('d-none')
    myResult == 3 ? usThree.classList.remove('d-none') : usThree.classList.add('d-none')
    myResult == 4 ? usFour.classList.remove('d-none') : usFour.classList.add('d-none')
    myResult == 5 ? usFive.classList.remove('d-none') : usFive.classList.add('d-none')
    myResult == 6 ? usSix.classList.remove('d-none') : usSix.classList.add('d-none')

    cpuResult == 1 ? cpuOne.classList.remove('d-none') : cpuOne.classList.add('d-none')
    cpuResult == 2 ? cpuTwo.classList.remove('d-none') : cpuTwo.classList.add('d-none')
    cpuResult == 3 ? cpuThree.classList.remove('d-none') : cpuThree.classList.add('d-none')
    cpuResult == 4 ? cpuFour.classList.remove('d-none') : cpuFour.classList.add('d-none')
    cpuResult == 5 ? cpuFive.classList.remove('d-none') : cpuFive.classList.add('d-none')
    cpuResult == 6 ? cpuSix.classList.remove('d-none') : cpuSix.classList.add('d-none')

    /**
     * funzione per stabilire chi vince
     */
    const whoBeatWho = () => {
        if (myResult > cpuResult) {

            outcome.innerText = 'Congratulazioni! Hai vinto TU! :)';
            outcome.classList.add('text-danger');


        } else if (myResult < cpuResult) {

            outcome.innerText = 'Peccato! Hai perso :(';
            outcome.classList.add('text-info');

        } else {

            outcome.innerText = 'Pari e Patta :|';
            outcome.classList.add('text-muted');


        };
    }

    //creo variabile per stampare in DOM
    let outcome = document.getElementById('outcome');

    whoBeatWho()
    //stabilisco vincitore e stampo

});