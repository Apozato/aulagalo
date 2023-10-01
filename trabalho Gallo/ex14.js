var numero =6;

if (numero >= 1 && Number.isInteger(numero)) {
  var soma = 0;

  for (var i = 2; i <= numero; i += 2) {
    soma += i;
  }

  console.log("A soma dos números pares de 1 até " + numero + " é: " + soma);
} else {
  console.log("Número inválido. Digite um número inteiro positivo.");
}
