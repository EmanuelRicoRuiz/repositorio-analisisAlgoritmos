const array = [9, 2, 1, 6, 5, 0, 2, 2]

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
    console.log(contadorArray)
    const resultadoArray = []
    for (let i = 0; i < contadorArray.length; i++) {
        while (contadorArray[i] > 0) {
            resultadoArray.push(i)
            contadorArray[i]--
        }
    }
    return resultadoArray
}

console.log(countingSort(array))