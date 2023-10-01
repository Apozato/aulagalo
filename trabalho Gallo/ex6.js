
var saldoAtual = 500.0;

var valorDoCheque = 1000;

if (!isNaN(valorDoCheque)) {
  
  var novoSaldo = saldoAtual - valorDoCheque;

  console.log("Novo saldo: R$" + novoSaldo.toFixed(2));
} else {
  console.log("Valor do cheque inválido.");
}
