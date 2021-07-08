# showimages
Visualizzatore immagini di Shutterstock

## Prerequisiti

- Node.js
- Angular (testato con versione 11)
- Credenziali Developer Shutterstock per accesso API

come descritto in https://www.shutterstock.com/it/developers/documentation/searching bisogna

1. avere un account
2. creare un'applicazione
3. autenticarsi

Per autenticarsi in questo semplice esempio è sufficiente usare una Basic authentication.

Quindi una volta creata l'applicazione del punto 2 bisogna recuperare Client ID e Client Secret forniti e impostare le variabili di ambiente SHUTTERSTOCK_CONSUMER_ID e SHUTTERSTOCK_CONSUMER_SECRET valorizzate con i rispettivi valori.

A questo punto il backend utilizzando i valori di queste variabili di ambiente, prima di utilizzare le API, effettuarà una Basic authentication verso Shutterstock.

## Esecuzione del backend

Da terminale/shell, posizionarsi nella directory showimagesbackend ed eseguire "node server.js"

## Esecuzione del frontend

Da terminale/shell, posizionarsi nella directory showimagesfront ed eseguire "ng serve --open"


