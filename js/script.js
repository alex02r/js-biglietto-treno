//Ask information at user
let km = prompt('Inserisci quanti chilomentri vuoi percorrere: ');
let eta = prompt('Inserisci la tua età: ');

//define the price
let prezzo = km * 0.21;

if(eta < 18){
    //Add 20% discount
    prezzo = (prezzo * 20 / 100).toFixed(3);

}else if(eta > 65){
    //Add 40% discount
    prezzo = (prezzo * 40 / 100).toFixed(3);

}

console.log(prezzo);