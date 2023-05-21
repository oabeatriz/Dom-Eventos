function somar() {
    var num1 = window.document.getElementById("num1");
    var num2 = window.document.getElementById("num2");
    var res = window.document.getElementById("res")
    var num1 = Number(num1.value)
    var num2 = Number(num2.value)
    var soma = num1 + num2
    res.innerHTML = `A soma entre ${num1} e ${num2} é: ${soma}`
}