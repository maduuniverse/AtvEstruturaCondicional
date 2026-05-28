let codigo = Number(prompt(
    "Cardápio:\n1 - Hambúrguer\n2 - Pizza\n3 - Refrigerante\n4 - Batata Frita"
));

switch (codigo) {
    case 1:
        alert("Hambúrguer - R$ 15,00");
        break;

    case 2:
        alert("Pizza - R$ 30,00");
        break;

    case 3:
        alert("Refrigerante - R$ 6,00");
        break;

    case 4:
        alert("Batata Frita - R$ 12,00");
        break;

    default:
        alert("Código inválido");
}
