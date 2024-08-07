const prompt = require('prompt-sync')();

let num1 = 0;
let num2 = 0;
let numeros = [];

function calculoSoma(n1, n2){
    return n1 + n2;
}
function calculoSubtracao(n1, n2){
    return n1 - n2;
}
function calculoMultiplicacao(n1, n2){
    return n1 * n2;
}
function calculoDivisao(n1, n2){
    return n1 / n2;
}
function calculoPorcentagem(valor, total) {
    return (valor / total) * 100;
}

function exibirMenu() {
    console.log(
        "  1. Soma (+)\n" +
        "  2. Subtração (-)\n" +
        "  3. Multiplicação (x)\n" +
        "  4. Divisão (/)\n" +
        "  5. Porcentagem (%)\n" +
        "  6. Sair\n");
}

console.log("\nBem-vindo à calculadora simples!\n");

while (true) {
    exibirMenu();

    let operacao = parseInt(prompt("Digite o número da operação desejada: "));

    // Validar se a entrada da operação é um número e está dentro do intervalo correto
    if (isNaN(operacao) || operacao < 1 || operacao > 6) {
        console.log("\nOperação inválida. Por favor, escolha um número entre 1 e 6.\n");
        continue;
    }

    if (operacao === 6) {
        console.log("\nEncerrando a calculadora.");
        break; // Sai do loop e encerra o programa se o usuário escolher sair
    }

    console.log("Por favor, digite os números da operação separados por espaço: ");
    let input = prompt();

    numeros = input.split(" ");

    num1 = parseFloat(numeros[0]);
    num2 = parseFloat(numeros[1]);

    switch (operacao) {
        case 1:
            let soma = calculoSoma(num1, num2);
            console.log(`\nA soma de ${num1} + ${num2} é igual a ${soma}\n`);
            break;
        case 2:
            let subtracao = calculoSubtracao(num1, num2);
            console.log(`\nA subtração de ${num1} - ${num2} é igual a ${subtracao}\n`);
            break;
        case 3:
            let multiplicacao = calculoMultiplicacao(num1, num2);
            console.log(`\nA multiplicação de ${num1} x ${num2} é igual a ${multiplicacao}\n`);
            break;
        case 4:
            if (num2 !== 0) {
                let divisao = calculoDivisao(num1, num2);
                console.log(`\nA divisão de ${num1} / ${num2} é igual a ${divisao}\n`);
            } else {
                console.log("\nErro: Divisão por zero não é permitida.\n");
            }
            break;
        case 5:
            let porcentagem = calculoPorcentagem(num1, num2);
            console.log(`\n${num1} é ${porcentagem}% de ${num2}\n`);
            break;
    }

    // Perguntar se o usuário deseja continuar após cada operação
    console.log("Deseja realizar outra operação? (s/n)");
    let continuar = prompt().toLowerCase();

    if (continuar !== 's') {
        console.log("\nEncerrando a calculadora.");
        break;
    }
}
