/**
 * 
 * Algoritmo que imprime los numero enteros del 1 a n incluyendolo
 */
const num=(n)=>{
    for (let i=1;i<n+1;i++){
        console.log(i)
    }
}
/**
 * 
 * Algoritmo que suma los numero enteros del 1 a n incluyéndolo
 */
const sumaN = (num) => {
    let suma=0;
    for (let i=1;i<num+1;i++){
        suma+=i
    }
    return suma
}
const sumaFormula = (num) => {
    return (num*(num+1)/2)
}
const tablaMultiplicar = (n) => {
    for(let i=1;i<n+1;i++){

        for (let j=1;j<20+1;j++){
            console.log(`${i}*${j}= ${i*j}\t`)
        }
        
    }
}
const main = () => {
    console.time("nums")
    tablaMultiplicar(10)
    console.timeEnd("nums")
}

main();