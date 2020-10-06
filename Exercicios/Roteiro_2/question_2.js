const progressaoValues = {
    id: 1,
    name: 'valores',
    n: 15,
    a1: 3,
    e: 5
}

const calcProgressAritmetico = (values) => {
    const { n, a1, e} = values;
    let soma = 0;
    let nTermos = [a1];
    for (let i = 1; i <= n; i++) {
        nTermos[i] = a1 + (i - 1) * e;
        console.log(`Termo[${i}] = ${nTermos[i]}`);
    }
    soma = n * (a1 + nTermos[n]) / 2;
    console.log(`Soma dos termos PA: ${soma}`);
}

calcProgressAritmetico(progressaoValues);

const calcProgressGeometrica = (values) => {
    const { n, a1, e } =  values;
    let soma = 0;
    const nTermos = [a1];

    for (let i = 1; i <= n; i++) {
        nTermos[i] = a1 * Math.pow(e, (i - 1));
        console.log(`Termo[${i}] = ${nTermos[i]}`);
    }
    soma  = a1 * (1 - Math.pow(e, n) / (1 - e));
    console.log(`Soma dos termos PG: ${soma}`);
}

calcProgressGeometrica(progressaoValues);