// la mia intenzione è recuperare una lista utenti tramite internet, accedendo ad un vero
// database e contattando una vera API
// una API è un "ponte di collegamento" che ci viene offerto dai server al fine di poter
// interagire con esso e con il DB, che è la struttura che ospita fisicamente i dati.

// che API andremo a contattare?
const usersURL = 'https://jsonplaceholder.typicode.com/users'

const getData = function () {
  // qui dentro eseguirò la fetch
  fetch(usersURL, {
    // questo è un oggetto di configurazione della request
    // method: 'GET', // è anche quello di default, se fate una "GET" potete ometterlo
    // body: // si mette solo nelle chiamate con metodo "POST" e "PUT"
    // headers: {
    //     // qui dentro metteremo informazioni di contorno, aggiuntive
    //     // ma nella nostra semplice chiamata GET non serviranno
    // }
    // nel nostro caso l'oggetto di configurazione non è necessario, potremmo fare
    // addirittura a meno di tutto il secondo parametro di fetch
  })
    .then((response) => {
      // nel blocco then voi predisponete il codice per il finale POSITIVO della Promise
      // response è un oggetto contenente un po' di dati su quello che avete ottenuto dal server
      console.log('RESPONSE', response)
      // da questa response io valuto come proseguire: noi finiremmo nel blocco then anche
      // in caso di response negativa (con codice 404, 400, 401, 500 etc.)
      // per es. sostituendo l'endpoint da /users a /gattini il server lo contattereste comunque,
      // ma la risposta avrebbe uno status di 404 e la proprietà "ok" sarebbe false
      if (response.ok) {
        // prima di continuare a estrarre il JSON da questa risposta, devo verificare
        // il valore di "ok" (che in un colpo solo ci da il risultato dell'operazione)
        // se il valore di "ok" è true, sono pronto per estrarre il JSON da questa response
        return response.json() // estrae il JSON dalla response, ma con una Promise!!!
        // lo attendo con un blocco .then e .catch successivo (riga 47, 52)
      } else {
        // qui vuol dire che la response del server è arrivata, ma che NON CONTIENE i dati cercati
        // dobbiamo gestire l'errore... invece che DUPLICARE la gestione dell'errore, teniamo solo
        // il blocco di errore definito nel catch e se finisco in questo else io faccio "harakiri"
        // e gestisco l'errore in un solo blocco
        throw new Error('Errore nella response ottenuta dal server')
        // a questo punto il flusso del codice finisce nel blocco catch e il parametro error
        // diventa la mia stringa
      }
    })
    // questo ulteriore blocco then ci serve per aspettare il finale "positivo" del response.json()
    .then((arrayOfUsers) => {
      // qui siamo finiti nel finale positivo della riga 34
      console.log('ARRAY UTENTI', arrayOfUsers)
      // <li class="list-group-item">An item</li>
      // prendo un riferimento alla ul vuota degli utenti
      const usersList = document.getElementById('users') // <ul></ul>
      for (let i = 0; i < arrayOfUsers.length; i++) {
        usersList.innerHTML += `
            <li class="list-group-item">${arrayOfUsers[i].name} - ${arrayOfUsers[i].phone}</li>
        `
      }
    })
    .catch((error) => {
      // nel blocco catch voi predisponete il codice per il finale NEGATIVO della Promise
      console.log('ERRORE', error)
      // si entra nel blocco catch automaticamente se il server non è raggiungibile
    })
}

getData() // eseguo getData all'avvio della pagina
