var numeroTotalPrestacoes = 24;

var prestacoesPagas = 13;

var valorPrestacao = 235;

if (!isNaN(numeroTotalPrestacoes) && !isNaN(prestacoesPagas) && !isNaN(valorPrestacao)) {
  
  var totalPago = prestacoesPagas * valorPrestacao;

  var saldoDevedor = (numeroTotalPrestacoes - prestacoesPagas) * valorPrestacao;

  console.log("Total pago pelo consorciado: R$" + totalPago.toFixed(2));
  console.log("Saldo devedor: R$" + saldoDevedor.toFixed(2));
} else {
  console.log("Valores inseridos são inválidos.");
}
