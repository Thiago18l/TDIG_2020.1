function greaterValue() {
    let numbers = document.getElementById("element").value;
    let result = document.querySelector("#result");
    numbers = numbers.split(",");
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i]) > max) {
            max = numbers[i];
        }
    }
    result.innerHTML = `O maior valor é ${max}`
}