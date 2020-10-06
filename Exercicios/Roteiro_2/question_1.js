const array = [1, 60, 232, 7, 25, 76, 29, 74, 92];

const lista = array.filter((numbers) => {
    if (numbers >= 60 && numbers < 300) {
        return numbers;
    }
});

let somatorio = 0;
somar = (value) => somatorio += value;

let soma = lista.forEach(somar);
console.log(`A lista dos valores maiores que 60 é: ${lista}`);
console.log(`A soma dos elementos da lista é ${somatorio}`);
