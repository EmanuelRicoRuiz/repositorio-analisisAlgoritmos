
function operar() {
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var opcion = document.getElementById("operadores").value;
    var resultado = document.getElementById("Resultado");
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    if (num1 == NaN || num2 == NaN) {
        resultado.innerHTML = "Solo se admiten números"
    } else {
        if (opcion == "1") {
            resultado.innerHTML=`<h1>${num1}+${num2}=${num1+num2}</h1>`
        } else if (opcion == "2") {
            resultado.innerHTML=`<h1>${num1}-${num2}=${num1-num2}</h1>`
        } else if (opcion == "3") {
            resultado.innerHTML=`<h1>${num1}*${num2}=${num1*num2}</h1>`
        } else if (opcion == "4") {
            resultado.innerHTML=`<h1>${num1}/${num2}=${num1/num2}</h1>`
        } else {
            alert("opción inválida.")
        }

    }



}
