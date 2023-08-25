function Calcular() {
//Variavel Local
let numero1 = Number(document.getElementById('numero1').value);
let numero2 = Number(document.getElementById('numero2').value);
let numero3 = Number(document.getElementById('numero3').value);
let resultado = (numero1 + numero2 ) * numero3;
    console.log("O resultado é ", resultado);
    document.getElementById('resultado').innerHTML = "o resultado é" + resultado;
    //console.log("o resultado é", resultado);
}