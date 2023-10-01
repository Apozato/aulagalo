var numero = 7;

if (!isNaN(numero)) {
  console.log("Tabuada do " + numero + ":");

  for (var i = 0; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
} else {
  console.log("Número inválido. Por favor, digite um número válido.");
}
