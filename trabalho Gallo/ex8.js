var nomeAluno = "ana";

var nota1 = 8;
var nota2 = 7;
var nota3 = 9;

if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
  
  var media = (nota1 + nota2 + nota3) / 3;

  console.log("Nome do aluno: " + nomeAluno);
  console.log("Média aritmética das notas: " + media.toFixed(2));
} else {
  console.log("Notas inseridas são inválidas.");
}
