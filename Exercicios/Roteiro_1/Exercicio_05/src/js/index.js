function reverseLine() {
    let str = document.getElementById("element").value;
    let result = document.querySelector("#result")
    let resultado = reverseString(str);
    result.innerHTML = `O resultado é ${resultado}`  
}

const reverseString = (str) => {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}