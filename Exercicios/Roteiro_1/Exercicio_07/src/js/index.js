const multiplo = function () {
    let entrada = document.querySelector("#element").value;
    entrada = entrada.split(",");
    let multiplo = 0;
    for (let i = 0; i < entrada.length; i++) {
        if (parseInt(entrada[i]) % 2 == 0) {
            continue;
        } else if (parseInt(entrada[i]) % 3 == 0) {
            multiplo += parseInt(entrada[i]);
        }
    }
    document.write(multiplo);
}