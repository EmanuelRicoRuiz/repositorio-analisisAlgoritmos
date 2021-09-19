
var fs = require('fs');

const controladorVentas=require('./controllers/ventas.controller')
controladorVentas.consultarVentas().then(respuesta_controlador=>{
    let merge=require('./organizarVentas');
    let listaOrdenada=merge.mergeSort(respuesta_controlador)
    crearExcel(listaOrdenada);
}).catch(error=>{
    console.log('error ',error);
})

const crearExcel = (lista) => {
    
    var writeStream = fs.createWriteStream("ventas.xls");
    var header = "Numero factura" + "\t" + " Cliente" + "\t" + "Valor" + "\t"+"fecha" + "\t"+"Vendedor" + "\t"+"Plazo" + "\n";
    writeStream.write(header);
    for (let size=0;size<lista.length;size++){
        writeStream.write(`${lista[size].numerofactura}\t${lista[size].cliente}\t${lista[size].valor}\t${lista[size].fecha}\t${lista[size].vendedor}\t${lista[size].plazo}\n`)
    }
    
    writeStream.close();
}
const filas=(lista, rows, size)=>{
    if(size==0){
        return rows
    }
    rows.push(`${lista[size].numerofactura}\t${lista[size].cliente}\t${lista[size].valor}\t${lista[size].fecha}\t${lista[size].vendedor}\t${lista[size].plazo}\n`)
    return filas(lista,rows,size-1)
}
module.exports={crearExcel}