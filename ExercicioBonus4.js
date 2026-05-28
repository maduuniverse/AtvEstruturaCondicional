let idade = Number(prompt("Digite sua idade:"));
let faixa;

if (idade <= 12) {
    faixa = 1;
} else if (idade <= 17) {
    faixa = 2;
} else if (idade <= 59) {
    faixa = 3;
} else {
    faixa = 4;
}

switch (faixa) {
    case 1:
        alert("Criança");
        break;

    case 2:
        alert("Adolescente");
        break;

    case 3:
        alert("Adulto");
        break;

    case 4:
        alert("Idoso");
        break;
}
