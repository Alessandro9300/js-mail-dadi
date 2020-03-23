// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e   stampa un messaggio appropriato;

// creo la mia lista di mails

 var myArray = ["uno-mail", "due-mail","tre-mail","quattro-mail","cinque-mail"];

// creo una variabile per far inserire all'utente la sua mail

var userMail = prompt("Inserire mail");

// creo messaggi output

var accessoConsentito = "Benvenuto utente"
var accessoNegato = "E-mail inserita errata"

// creo condizione

document.getElementById('output').innerHTML = accessoNegato;


for (var i = 0; i < myArray.length; i++) {

  if (myArray[i] === userMail) {
    document.getElementById('output').innerHTML = accessoConsentito;
  }

}
