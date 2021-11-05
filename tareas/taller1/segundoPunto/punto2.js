

const aleatorios = (limSup) => {
    return parseInt(Math.random(limSup) * 10);
}
const llenarArray = (tamaño, array, limSup) => {

    if (tamaño == 0) {
        return array
    }
    var encontrado;
    var num = aleatorios(limSup ^ 2);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return llenarArray(tamaño, array, limSup)
        }
    }
    array.push(num)
    return llenarArray(tamaño - 1, array, limSup)

}
const main = () => {
    console.log("Escribe el numero");
    var entrada = process.openStdin();
    entrada.on("data", function (consola) {
        var tamaño = consola;
        tamaño = parseInt(tamaño, 10);
        var array = []
        console.time("segundo")
        console.log(llenarArray(tamaño, array, tamaño))
        console.timeEnd("segundo")
        process.exit(0);
    });
}
main();
function countingSort(vectorEntrada) {
    if (vectorEntrada.length < 2) {
        return vectorEntrada
    }

    let maxValor = vectorEntrada[0]

    //Numero mayor
    for (let i = 1; i < vectorEntrada.length; i++) {
        if (vectorEntrada[i] > maxValor) {
            maxValor = vectorEntrada[i]
        }
    }

    const contadorArray = new Array(maxValor + 1)
    console.log(contadorArray)
    for (let aux of vectorEntrada) {
        if (!contadorArray[aux]) {
            contadorArray[aux] = 0
        }
        contadorArray[aux]++
    }

    const resultadoArray = []
    for (let i = 0; i < contadorArray.length; i++) {
        while (contadorArray[i] > 0) {
            resultadoArray.push(i)
            contadorArray[i]--
        }
    }
    return resultadoArray
}