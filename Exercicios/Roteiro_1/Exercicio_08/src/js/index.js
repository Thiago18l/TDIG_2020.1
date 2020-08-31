const fatorial = function () {
    let entrada = document.querySelector("#element").value;
    entrada = entrada.split(",");
    let fatoriais = 0;
    for (let i = 0; i < entrada.length; i++) {
        fatoriais = rFatorial(parseInt(entrada[i]));
        alert(`O fatorial de ${entrada[i]} é: ${fatoriais}`);
    }
    
}

const rFatorial = function (n) {
    if (parseInt(n) == 0) {
        return 1;
    }
    else {
        return parseInt(n) * rFatorial(parseInt(n) - 1);
    }
}