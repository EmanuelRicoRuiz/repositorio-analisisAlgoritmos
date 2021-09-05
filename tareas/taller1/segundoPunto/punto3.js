
const sumanaturales=(num,suma)=>{
    if(num%2!=0){
        throw new Error("numero impar")
    }
    if(num==0){
        return suma
    }
    suma+=num
    return sumanaturales(num-2,suma);
}
const main = () => {
    console.log("Escribe el numero");
    var entrada = process.openStdin();
    entrada.on("data", function (consola) {
        var num = consola;
        num = parseInt(num, 10);
        var suma=0;
        console.time("tercero")
        sumanaturales(num,suma)
        console.timeEnd("tercero")
        process.exit(0);
    });
}
main();