
function square() {
    let numbers = document.getElementById("element").value;
    numbers = numbers.split(",");
    for (let i = 0; i < numbers.length; i++) {
        let quadrado = parseInt(parseInt(numbers[i]) * parseInt(numbers[i]));
        document.write(`O quadrado de ${numbers[i]} é ${quadrado} <br>`);
    }
}