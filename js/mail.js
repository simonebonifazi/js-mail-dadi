/*Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

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


/* mail steps

1. creo una variabile contenitore
2. vi inserisco un array con la lista delle mail valide 
3. creo una variabile per contenere la risposta dell'utente(chiedo col prompt)
4. tramite includes verifico se la mail inserita dall'utente è presente nella mia lista 
5. stampo in pagina se positivo, altrimenti alert 

*/

const emailAllowed = ["io@gmail.com", "thisisanexample@gmail.com", "mymail@hotmail.it", "mybestmail@gmail.com", "trythisone@gmail.it"];

const userMail = prompt("Inserisci qui la tua mail...");

//variabile per stampare messaggio benvenuto 
let welcome = document.getElementById("welcome-message");

if (emailAllowed.includes(`${userMail}`)) {

    alert("Benvenuto!");


    welcome.innerText = 'Congratulazioni! ha effettuato correttamente l\'accesso alla nostra pagina. Buon divertimento!';
} else {

    alert("Siamo spiacenti, la mail inserita non risulta essere abilitata per effettuare l'accesso. ");
}
