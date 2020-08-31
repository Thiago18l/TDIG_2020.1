const reverseNumbers = function () {
    let entrada = document.querySelector("#element").value;
    entrada = entrada.split(",");
    const result = reverter(entrada);
    console.log(result)
    document.write(`Valores Invertidos: ${result}`)
}

const reverter = function (numbers) {
    return numbers.reverse().join(" ").trim();
}