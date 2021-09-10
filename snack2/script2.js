// creare un array di oggetti di squadre di calcio
// ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subuti.
// nome sarà l'unica proprietà da compilare 
// le altre sarnno a 0

// generare numeri random al posto degli 0 nelle proprietà
// punti fatti e falli subiti

// usando la destrutturazione creiamo un nuovo array
//  i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console

const squadreCalcio = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
        //metodo che ritorna la proprietà falli
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    }
];

// ciclo for...of vedi più avanti
for(let squadra of squadreCalcio) {

    squadra.falli = getRandomInt(0,100)
    squadra.punti = getRandomInt(0,100)
}

console.log(squadreCalcio);

// creo un nuovo array con nome e falli
let arrayNomiFalli = []

for (const squadra of squadreCalcio) {
    
    // recupero i valori con il destructoring
    let {nome,falli} = squadra

    // creo un nuovo oggetto con le due proprieta
    let obj = {nome,falli}

    // creo messaggio con il template literal
    let messaggio = `
    La squadra: ${ nome } ha commesso ${ squadra.getFalli() } falli!
    `
    console.log(messaggio)

    arrayNomiFalli.push(obj)
}

console.log(arrayNomiFalli)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

