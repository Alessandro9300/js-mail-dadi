// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e   stampa un messaggio appropriato;

// creo la mia lista di mails

 var myArray = ["uno-mail", "due-mail","tre-mail","quattro-mail","cinque-mail"];

// creo una variabile per far inserire all'utente la sua mail

var userMail = prompt("Inserire mail");

// creo messaggi output

var accessoConsentito = "Benvenuto utente"
var accessoNegato = "E-mail inserita errata"

// creo condizione

var isMailPresente;

for (var i = 0; i < myArray.length; i++) {

  // valorizzare la variabile isMailPresente
  // per capire se la mail c'è o no

  if (myArray[i] === userMail) {

    isMailPresente = true;

  } else if (isMailPresente == undefined) {

    isMailPresente = false;
  }

  console.log(i);
}


// stampare il messaggio in base al valore della variabile (OK)

if (isMailPresente) {

  document.getElementById('output').innerHTML = accessoConsentito;

} else {

  document.getElementById('output').innerHTML = accessoNegato;
}



console.log(myArray);
