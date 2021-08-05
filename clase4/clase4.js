/**
 * 
 * @param {number} primer numero para sumar
 * @param {number} segundo numero para sumar  
 * @returns suma de dos numeros
 */
const suma = (numero1, numero2) => {
    return parseFloat(numero1) + parseFloat(numero2);
}
/**
 * 
 * @param {number} primer numero para multiplicar 
 * @param {number} segundo numero para multiplicar 
 * @returns multiplicacion de dos numeros
 */
const multiplicar = (numero1,numero2) => {
    return parseFloat(numero1)*parseFloat(numero2)
}
/**
 * 
 * @param {number} primer numero para restar 
 * @param {number} segundo numero para restar 
 * @returns resta de dos numeros
 */
 const restar = (numero1,numero2) => {
    return parseFloat(numero1)-parseFloat(numero2)
}
/**
 * 
 * @param {number} primer numero para dividir 
 * @param {number} segundo numero para dividir 
 * @throws error si numero 2 es igual a 0
 * @returns division de dos numeros
 */
 const dividir = (numero1,numero2) => {
    return parseFloat(numero1)/parseFloat(numero2)
}
console.log(dividir(5,0))