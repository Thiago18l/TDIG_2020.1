/*
Escreva duas funções javascript (ES6) usando a técnica de promisses. A primeira
função, colocarTodasPalavrasEmMaiusculo(), receberá um array de palavras e as colocará
em maiúsculo. Nesta primeira função, o uso da função map (de Array) é obrigatório (acredito
que você já saiba a razão). Verifique, dentro do escopo da função map, se o array possui
valores que não são Strings, e se houver valores que não são String, um erro deve ser gerado.
A segunda função, ordenarPalavras(), realizará uma ordenação nas palavras por ordem
alfabética. Nesta segunda função, utilize a função forEach (de Array) para verificar se o
array possuir valores que não são Strings, caso haja valores que não são String, gere um erro.
Atenção: você deverá utilizar encadeamento de funções.
*/


const array = ['javascript', 'java', 'dart', 'python']
const array2 = ['joazin', 'mariabarriguda', 'jhonlennon', 10]


function inner (value) {
    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === "number") {
            throw new Error(`Tem numero na posição ${i}`)
        }
    }
}

function colocarTodasPalavrasEmMaiusculo(array) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            inner(array)
            resolve(array.map(e => {
                if (typeof e === "string") {
                    return e.toUpperCase()
                    }
                })
            )
        }, 3000)
        }
    )
}

function ordenarPalavras(array) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            array.forEach(element => {
                if (typeof element === "number") {
                    reject(new Error(`FUDEU, TEM ESSE NÚMERO AQUI NO ARRAY: ${element}`))  
                }
            });
            resolve(array.sort())
            
        }, 4000)
    })
}



colocarTodasPalavrasEmMaiusculo(array).then(console.log).catch(console.error)
ordenarPalavras(array2).then(console.log).catch(console.error)

