// creare un array di oggetti ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso
// stampare a schermo la bici con peso minore

const biciclette = [
    {
        nome: 'Lombardo',
        peso: 20
    },
    {
        nome: 'Graziella',
        peso: 30
    },
    {
        nome: 'cletta',
        peso: 25
    }
]

console.log(biciclette)

// cerco la bici più leggera
let biciLeggera

for(var i = 0; i < biciclette.length; i++) {

    // alla prima iterazione bicileggere è undefined
    if(!biciLeggera) {

        biciLeggera = biciclette[i]
        console.log(i,biciLeggera)
        continue
    }
    // dalla seconda iterazione in poi confronto i pesi
    // recuperoil peso dall'oggetto con il destructoring
    let { peso } = biciclette[i];
    // let peso = biciclette[i].peso;

    if(peso < biciLeggera.peso) {
        biciLeggera = biciclette[i]
    }
    console.log(i,biciLeggera)
    // console.log(biciclette[i],peso)
}

