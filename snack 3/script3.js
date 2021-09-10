// Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
// Usiamo i nuovi metodi degli array forEach() o filter().

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayNum)
const arrayNew = ritornoPosizione(arrayNum, 3 , 8);

console.log(arrayNew)

function ritornoPosizione(array, min, max) {
    let arrayTemp = [];

    array.forEach((element, index)  => {    // index = i    e     element = array[i]   
         
        if (index >= min && index <= max) {
            arrayTemp.push(element);
        }
    });
    return arrayTemp;
}

