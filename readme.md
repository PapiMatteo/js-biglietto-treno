## Esercizio
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- Il prezzo del biglietto è definito in base ai km (0.21 € al km)

- Va applicato uno sconto del 20% per i minorenni

- Va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### Raccolta Dati

1. Chiedere all'utente i chilometri da percorrere
2. Chiedere all'utente l'eta'
3. Definire il prezzo del biglietto calcolando i chilometri per 0.21 

### Logica del programma

1. SE eta' dell'utente e' maggiore o uguale a 65
        
        applico 40% di sconto

    ALTRIMENTI SE l'eta' dell'utente e' minore di 18 

        applico il 20% di sconto 
    
    ALTRIMENTI 

        paghera' prezzo intero


2. Imposto il massimo di cifre decimali per il prezzo totale
3. Preparo il messaggio da mandare a schermo

### Output 

Mando il messaggio a schermo nel file HTML