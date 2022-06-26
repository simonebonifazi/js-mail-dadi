
/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
Svolgere entrambi gli esercizi con la stessa logica ma lavorare con il DOM per stampare i risultati.
Provare a prendere la mail dell'utente da un input e fare la verifica dopo aver cliccato su un bottone
CSS a piacimento*/





/*
dadi steps:
1. creo randomizzatore da 1 a 6, per me e cpu
2. stabilisco quale dei due numeri è maggiore dell' altro
3. stampo in console il vincitore
*/


/*

nuovo approccio
ho messo nel mark-up i dadi in display:none, ora ad ogni assegnazione casuale del randomizzatore
voglio rivmuovere la classe d-none del valore indicato
steps:
1. per rispettare la mia traccia, devo connettere un event-listener al bottone in pagina
2. al click, verifico che funzioni
3. farò uscire il dado che mi serve, collegandolo con una serie di if agli esiti del randomizzatore
dunque mi devo dichiarare le variabili dei dadi pc e user 
||posso farlo con un array? in entrambi i casi devo dichiarare le vg
4. stampo in pagina risultato scritto
*/


//0. randomizzo i valori per noi e per il pc
let myResult = Math.floor(Math.random() * 6) + 1;
console.log(myResult);
let cpuResult = Math.floor(Math.random() * 6) + 1;
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

startGame.addEventListener('click', function () {

    //rimuovo il d-none da results
    finalResult.classList.remove('d-none');
    //funziona; avanti.
    // adesso ad ogni valore del random aggiungo il corrispondente dado
    if (myResult == 1) {
        usOne.classList.remove('d-none');
    } else if (myResult == 2) {
        usTwo.classList.remove('d-none');
    } else if (myResult == 3) {
        usThree.classList.remove('d-none');
    } else if (myResult == 4) {
        usFour.classList.remove('d-none');
    } else if (myResult == 5) {
        usFive.classList.remove('d-none');
    } else if (myResult == 6) {
        usSix.classList.remove('d-none');
    };
    //verifico e poi copio e incollo //! ok! 
    if (cpuResult == 1) {
        cpuOne.classList.remove('d-none');
    } else if (cpuResult == 2) {
        cpuTwo.classList.remove('d-none');
    } else if (cpuResult == 3) {
        cpuThree.classList.remove('d-none');
    } else if (cpuResult == 4) {
        cpuFour.classList.remove('d-none');
    } else if (cpuResult == 5) {
        cpuFive.classList.remove('d-none');
    } else if (cpuResult == 6) {
        cpuSix.classList.remove('d-none');
    };

    //creo variabile per stampare in DOM
    let outcome = document.getElementById('outcome');


    //stabilisco vincitore e stampo
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

});
