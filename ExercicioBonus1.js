let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

let opcao = Number(prompt(
    "Escolha:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
));

switch (opcao) {
    case 1:
        alert("Resultado: " + (n1 + n2));
        break;

    case 2:
        alert("Resultado: " + (n1 - n2));
        break;

    case 3:
        alert("Resultado: " + (n1 * n2));
        break;

    case 4:
        alert("Resultado: " + (n1 / n2));
        break;

    default:
        alert("Opção inválida");
}
