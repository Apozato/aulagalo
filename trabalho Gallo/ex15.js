var numero = 10;

if (numero >= 2 ) {
  var ehPrimo = true;

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(numero + " é um número primo.");
  } else {
    console.log(numero + " não é um número primo.");
  }
} else {
  console.log("Número inválido. Digite um número inteiro maior ou igual a 2.");
}
