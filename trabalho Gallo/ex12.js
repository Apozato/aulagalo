var numero =20;

if (numero >= 0 && Number.isInteger(numero)) {
  
  console.log("Contagem regressiva de " + numero + " até 0:");
  for (var i = numero; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Número inválido. Digite um número inteiro positivo.");
}
