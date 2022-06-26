
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

//1.
let myReslut = Math.floor(Math.random() * 6) + 1;
console.log(myReslut);
let cpuResult = Math.floor(Math.random() * 6) + 1;
console.log(cpuResult);

//xstampare in dom
let result = document.getElementById('results')

//stabilisco vincitore e stampo

if (myReslut > cpuResult) {
    result.innerText = 'Hai vinto TU!'
    console.log('U WIN')
} else if (myReslut < cpuResult) {
    console.log(' U LOOSE(R)')
    result.innerText = 'Hai perso :('
} else {
    console.log('WOW! IT\'S A DRAW!')
    result.innerText = 'Pari e Patta'
}