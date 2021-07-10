# showimages
Visualizzatore immagini di Shutterstock

## Prerequisiti

- Node.js (https://nodejs.org/)
- Angular (https://angular.io/) - testato con la versione 11
- Credenziali Developer Shutterstock per accesso API (https://www.shutterstock.com/it/developers)

## Operazioni preliminari

Come descritto in https://www.shutterstock.com/it/developers/documentation/searching, per poter utilizzare le API di Shutterstock bisogna:

1. avere un account
2. creare un'applicazione
3. autenticarsi

Per autenticarsi in questo semplice esempio è sufficiente usare una Basic authentication.

Quindi una volta creata l'applicazione del punto 2 bisogna recuperare Client ID e Client Secret forniti e impostare le variabili di ambiente SHUTTERSTOCK_CONSUMER_ID e SHUTTERSTOCK_CONSUMER_SECRET valorizzate con i rispettivi valori.

A questo punto il backend utilizzando i valori di queste variabili di ambiente, prima di utilizzare le API, effettuarà una Basic authentication verso Shutterstock.

Si fa presente che, utilizzando un account gratuito di Shutterstock, ci sono dei limiti nel numero di ricerche effettuabili e di immagini ricercabili.

## Esecuzione del backend

Aprire il terminale/shell.

Impostare le variabili di ambiente

**Windows**

```
set SHUTTERSTOCK_CONSUMER_ID=<valore Client ID>
set SHUTTERSTOCK_CONSUMER_SECRET=<valore Client Secret>
```

**Linux**

```
export SHUTTERSTOCK_CONSUMER_ID=<valore Client ID>
export SHUTTERSTOCK_CONSUMER_SECRET=<valore Client Secret>
```

posizionarsi nella directory showimagesbackend ed eseguire

```
node server.js
```

## Esecuzione del frontend

Da terminale/shell, posizionarsi nella directory showimagesfront ed eseguire

```
ng serve --open
```



