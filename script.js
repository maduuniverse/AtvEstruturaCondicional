let numero = Number(prompt("Digite um número:"));

if (numero % 3 === 0 && numero % 5 === 0) {
    alert("Divisível por 3 e 5");
} else if (numero % 3 === 0) {
    alert("Divisível por 3");
} else if (numero % 5 === 0) {
    alert("Divisível por 5");
} else {
    alert("Não é divisível por 3 nem por 5");
}
