const lugares = new Array(
    'Salvador',
    'Bahia',
    'Rio de janeiro'

)

console.log(lugares);

const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
    temPassagemComprada = true;
} else {
    console.log("Não é maior de idade e não posso vender");
    temPassagemComprada = false;
}
if (idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa Viagem!")
} else {
    console.log("Compre a Sua Passagem!")
}

let contador = 0;
let destinoExiste = true;

while(contador<3){
    if(lugares[contador]){
        console.log("Vai viajar")
        destinoExiste = true;
        break;
    }
    contador +=1
}

