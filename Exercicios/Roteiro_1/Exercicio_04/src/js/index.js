function dataBreaker() {
    let data = document.getElementById("element").value;
    data = data.split("/");
    let dia = data[0]
    let mes = data[1]
    let ano = data[2]
    document.writeln(`Dia: ${dia} <br>`, `Mês: ${mes}<br>`, `Ano: ${ano}`);
}