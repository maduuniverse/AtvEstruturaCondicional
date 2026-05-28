let nota = Number(prompt("Digite a nota do aluno: "));
if (nota >= 6 && nota <= 10) {
    alert("Aluno aprovado!");
}
if (nota >= 5 && nota < 6) {
    alert("Aluno em recuperação!");
}
if (nota < 5) {
    alert("Aluno reprovado!");
}
