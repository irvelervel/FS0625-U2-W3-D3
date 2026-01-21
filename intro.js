// Oggi tramite JS creeremo delle pagine che conterranno dei dati NON scritti da noi :)
// Questi dati potrebbero riguardare informazioni su utenti, info meteorologiche, risultati
// delle partite etc.

// Per ottenere questi dati dovremo contattare dei server (e i loro DB collegati) tramite
// delle HTTP REQUEST, a cui (si spera) verranno corrisposte delle HTTP RESPONSE.

// Il problema che dobbiamo affrontare è che questo dialogo REQUEST<->RESPONSE è ASINCRONO
// e questo è un problema nuovo: tutto il JS che abbiamo scritto fin'adesso era "SINCRONO"
// cioè ogni riga veniva completata prima di passare a quella successiva; questo non sarà
// più possibile con le operazioni asincrone, perchè una Response potrebbe metterci diversi
// secondi nel peggiore dei casi ad arrivarci, e JS non bloccherà l'esecuzione del resto
// del codice (non congelerà la finestra), perchè segue un modello I/O "non blocking".

// Quindi, per aspettare il termine di un'operazione asincrona SENZA fermare il resto dell'
// esecuzione del codice utilizzeremo un moderno oggeto JS: le "Promise".
// Una Promise è una "promessa": una promessa che prima o poi la nostra operazione asincrona
// terminerà e ci restituirà un risultato. Questo risultato, tuttavia, potrebbe contenere
// notizie "buone" o "cattive" (potremmo aver ad es. contattato con successo il server e
// sperare di avere ottenuto i dati richiesti, o potremmo invece avere ottenuto un errore
// a causa di un problema). Ne consegue che una Promise ha 3 stadi: "pending" ("pendente",
// quando la Promise sta ancora elaborando l'operazione), "resolved" ("risolta",  quando
// abbiamo ottenuto un "lieto fine" nella nostra operazione asincrona) o infine "rejected"
// ("rifiutata", quando invece del risultato sperato abbiamo ottenuto un errore).
// Per capire in quale stadio siamo e come la promessa si è conclusa, una Promise ci mette
// a disposizione dei "blocchi" di codice da preparare in anticipo che verranno utilizzati
// in maniera mutualmente esclusiva; un blocco "then" per gestire le Promise resolved, e
// un blocco "catch" per gestire le Promise rejected.

// Per contattare un server esterno ed effettuare una HTTP REQUEST ci sono state diverse
// metodologie JS nel corso degli anni, ma quella più moderna riguarda l'utilizzo di un
// metodo chiamato "fetch()"; fetch() è un metodo JS che ci permetterà di effettuare
// una HTTP REQUEST con url, metodo e headers a nostra scelta e ci restituirà una Promise.
// Quindi attenderemo l'esecuzione di fetch con i due metodi integrati per la gestione delle
// "Promise": un metodo then e un metodo catch.
