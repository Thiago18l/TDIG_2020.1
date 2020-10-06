const readline = require('readline');

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const cedulas = [200, 100, 50.00, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];



leitor.question(`Valor:`, (valor) => {
    calcularValor(parseFloat(valor));

    leitor.close();
});

function calcularValor (valor) {
    console.log('NOTAS:');
    cedulas.forEach(notas => {
        console.log(`${parseInt(valor / notas)} notas(s) de R$ ${notas.toFixed(2)}`);
        valor %= notas;
    });
    console.log('MOEDAS:');
    moedas.forEach(moeda => {
        console.log(`${parseInt(valor / moeda)} moedas de R$ ${moeda.toFixed(2)}`);
        valor = (valor % moeda) + 0.0001;
    })
}