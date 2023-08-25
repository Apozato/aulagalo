function Calcular() {
    //Variavel Local
    let numero1 = Number(document.getElementById('numero1').value);
    let resultado = numero1 **2;
    console.log("O resultado é ", resultado);
    document.getElementById('resultado').innerHTML = "o resultado é" + resultado;
}