function greaterThanEighteen() {
    let numbers = document.getElementById("element").value;
    numbers = numbers.split(",");
    for (let i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i]) >= 18) {
            document.writeln(`Maiores: ${numbers[i]} <br>`)
        }
    }
}