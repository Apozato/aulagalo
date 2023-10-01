var valor1 = 53;
var valor2 = 78;
var valor3 = 12;

var maiorValor;

if (valor1 >= valor2 && valor1 >= valor3) {
  maiorValor = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
  maiorValor = valor2;
} else {
  maiorValor = valor3;
}

console.log("O maior valor é: " + maiorValor);
