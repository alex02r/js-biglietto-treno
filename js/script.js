//Ask information at user
let km = prompt('Inserisci quanti chilomentri vuoi percorrere: ');
let eta = prompt('Inserisci la tua età: ');

//visualizate information on html file
document.getElementById('km').innerHTML += " " + km;
document.getElementById('eta').innerHTML += " " + eta;
//define the price
let prezzo = km * 0.21;

if(eta < 18){
    //Add 20% discount
    prezzo = (prezzo * 20 / 100).toFixed(2);

}else if(eta > 65){
    //Add 40% discount
    prezzo = (prezzo * 40 / 100).toFixed(2);

}

console.log(prezzo);