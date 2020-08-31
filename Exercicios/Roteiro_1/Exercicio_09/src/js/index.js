const media = function () {
    let entrada = document.querySelector("#element").value;
    let positive = document.querySelector("#plus");
    let negative = document.querySelector("#minus");
    let percent = document.querySelector("#percentual");
    let mediadiv = document.querySelector("#media");
    entrada = entrada.split(",");
    let positives = 0;
    let negatives = 0;
    for (let i = 0; i < entrada.length; i++) {
        if (parseInt(entrada[i]) > 0) {
            positives++;
        } else if (parseInt(entrada[i]) < 0) {
            negatives++;
        }
    }
    let percentual = percentFun(entrada.length, positives, negatives);
    let valor = mediaFun(entrada);
    mediadiv.innerHTML = `A média aritmética dos valores é: ${valor.toFixed(2)}`
    positive.innerHTML = `Quantidade de elementos positivos = ${positives}`
    negative.innerHTML = `Quantidade de elementos negativos = ${negatives}`
    percent.innerHTML = `Percentual de valores positivos: ${percentual[1].toFixed(1)}%, negativos: ${percentual[0].toFixed(1)}%`

}
const percentFun = (length, positivo, negativo) => {
    let item1 = negativo * 100 / length;
    let item2 = positivo * 100 / length;
    return [item1, item2]; 
}

const mediaFun = (entrada) => {
    let media = 0;
    let total = 0;
    for (let i = 0; i < entrada.length; i++) {
        media += parseInt(entrada[i]);
    }
    total = parseFloat(media / entrada.length);
    return total;
}