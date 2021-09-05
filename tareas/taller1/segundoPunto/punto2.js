const aleatorios = (limSup) => {
    return parseInt(Math.random() * (limSup - 1) + 1);
}
const llenarArray = (tamaño, array, limSup) => {

    if (tamaño == 0) {
        return array
    }
    var encontrado;
    var num = aleatorios(limSup ^ 2);
    encontrado = array.find(element => element == num);

    if (!encontrado) {
        array.push(num)
        return llenarArray(tamaño - 1, array, limSup)
    } else {
        return llenarArray(tamaño, array, limSup)
    }
}
const main = () => {
    console.log("Escribe el numero");
    var entrada = process.openStdin();
    entrada.on("data", function (consola) {
        var tamaño = consola;
        tamaño = parseInt(tamaño, 10);
        var array = []
        console.time("segundo")
        llenarArray(tamaño, array, tamaño)
        console.timeEnd("segundo")
        process.exit(0);
    });
}
main();