function Calcular() {
    //Variavel Local
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let soma = (numero1 + numero2 );
    let subtracao = (numero1 - numero2 );
    let multiplicacao = (numero1 * numero2 );
    let divisao = (numero1 / numero2 );
    // console.log("O resultado é ", resultado);
        document.getElementById('soma').innerHTML = "o resultado da soma é " + soma;
        document.getElementById('subtracao').innerHTML = "o resultado da subtracao é "  + subtracao;
        document.getElementById('multiplicacao').innerHTML = "o resultado da multiplicacao é " +  multiplicacao;
        document.getElementById('divisao').innerHTML = "o resultado da divisao é " + divisao;
        //console.log("o resultado é", resultado);
    }