

const my_arr = ['joazin', 'thiagin', 'maria', 'peneira', 'allan']


const verify = function (array) {
    array.forEach(element => {
        if (typeof element === "number") {
            throw new Error("Existe um número no array")
        }
    });
}

async function colocarTodasPalavrasEmMaiusculo(array) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            verify(array)
            resolve(array.map(e => {
                if (typeof e === "string") {
                    return e.toUpperCase()
                }
            }))
        }, 3000)
    })
    let result = await promise
    return result
}

async function ordenarPalavras(array) {
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            array.forEach(element => {
                if (typeof element === "number") {
                    reject(new Error(`FUDEU TEM NÚMERO NO ARRAY!`))  
                }
            });
            resolve(array.sort())
            
        }, 4000)
    })
    let result = await promise
    return result
}

colocarTodasPalavrasEmMaiusculo(my_arr).then(console.log).catch(console.error)
ordenarPalavras(my_arr).then(console.log).catch(console.error)
