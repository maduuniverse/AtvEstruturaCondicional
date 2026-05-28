let opcao = Number(prompt(
    "Escolha:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n3 - Celsius para Kelvin"
));

let temperatura = Number(prompt("Digite a temperatura:"));
let resultado;

switch (opcao) {

    case 1:
        resultado = (temperatura * 9/5) + 32;
        alert("Resultado: " + resultado + " °F");
        break;

    case 2:
        resultado = (temperatura - 32) * 5/9;
        alert("Resultado: " + resultado + " °C");
        break;

    case 3:
        resultado = temperatura + 273.15;
        alert("Resultado: " + resultado + " K");
        break;

    default:
        alert("Opção inválida");
}
