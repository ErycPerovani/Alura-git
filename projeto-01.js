const lugares = new Array(
    'Salvador',
    'Bahia',
    'Rio de janeiro'

)

console.log(lugares);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}
if (idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa Viagem!")
} else {
    console.log("Compre a Sua Passagem!")
}