const aleatorios=()=>{
    return parseInt(Math.random() * (100 - 1) + 1);
}
const llenarArray=(tamaño,array)=>{
    if (tamaño == 0) {
        return array
    }
    array.push(aleatorios());
    return llenarArray(tamaño - 1, array)
    
}
const main=()=>{
console.log("Escribe el numero");
var entrada = process.openStdin();
entrada.on("data", function(consola) {
    var tamaño = consola;
    tamaño=parseInt(tamaño,10);
    var array=[]
    console.time("primero")
    llenarArray(tamaño,array)
    console.timeEnd("primero")
    process.exit(0);
  });
}
main();
