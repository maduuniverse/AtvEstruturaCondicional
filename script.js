let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite: soma, subtração, multiplicação ou divisão");

if (operacao === "soma") {
    alert(n1 + n2);
} else if (operacao === "subtração") {
    alert(n1 - n2);
} else if (operacao === "multiplicação") {
    alert(n1 * n2);
} else if (operacao === "divisão") {
    alert(n1 / n2);
} else {
    alert("Operação inválida");
}