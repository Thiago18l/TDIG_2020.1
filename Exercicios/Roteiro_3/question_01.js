const _ = require("lodash")

function map(func,array) {
  
const arrayTriplicado = array.reduce((novoArray, elem) => {
    novoArray.push(func(elem))
    return novoArray
},[])

    return arrayTriplicado
};
function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    
    const arrayTriplicado = map((num) => num * 3, array);

    console.log(arrayTriplicado)
   
    if (_.isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}
executaTeste();