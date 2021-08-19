console.log("Escribe el numero");
var stdin = process.openStdin();

stdin.on("data", function(d) {
    var num = d;
    num=parseInt(num,10);
    ImprimirNumeros(num);
    process.exit(0);
  });

const ImprimirNumeros=(num)=>{
    console.time("Tiempo");
    for (let i=0;i<num+1;i++){
        console.log(i)
    }
    console.timeEnd("Tiempo");
}


  