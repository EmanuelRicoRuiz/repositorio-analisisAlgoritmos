function llenarContenedor(pesoMaximo = 0, pesos = [], valores = []) {
    let n = pesos.length;
    let numIter = 0
    numIter += 1 + 3 * n + n * Math.log2(n);
    let fracciones = valores.map(v => 0);
    let precios = valores.map((v, i) => [i, v / pesos[i]])
    precios = precios.sort((a, b) => b[1] - a[1])
    precios = precios.map(v => v[0]);
    let pesoContenedor = 0;
    for (let j = 0; j < precios.length; j++) {
        numIter++;
        let i = precios[j];
        if (pesoContenedor + pesos[i] <= pesoMaximo) {
            fracciones[i] = 1;
            pesoContenedor += pesos[i];
        } else {
            fracciones[i] = (pesoMaximo - pesoContenedor) / pesos[i];
            pesoContenedor = pesoMaximo;
        }
 

        if (pesoContenedor === pesoMaximo) break;
    }
    return fracciones;
}

const compararElPeso = (pesos, resultado) => {
    pesoTotal = 0;
    for (let i = 0; i < pesos.length; i++) {
        pesoTotal = pesoTotal + (pesos[i]*resultado[i]);
    }
    
    return pesoTotal;
}

const precioDelContenedor = (valores, resultado) => {
    let precioContenedor = 0;
    for (let i = 0; i < valores.length; i++) {
        precioContenedor = precioContenedor + (valores[i]*resultado[i]);
    }
    return precioContenedor;
}


module.exports = { precioDelContenedor, llenarContenedor, compararElPeso }
