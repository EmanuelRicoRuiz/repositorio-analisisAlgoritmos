const { precioDelContenedor, llenarContenedor, compararElPeso } = require('../contenedor.js');

test('Valores ingresados=> {peso=[3, 12, 6, 8, 11] , valor=[3, 7, 9, 1, 6]}.resultado= [ 1, 1, 1, 0, 0.2727272727272727 ]', () => {
    let resultado_obtenido = llenarContenedor(24, [3, 12, 6, 8, 11], [3, 7, 9, 1, 6]);
    let resultado_esperado = [ 1, 1, 1, 0, 0.2727272727272727 ];
    expect(resultado_obtenido).toEqual(resultado_esperado);
});

test('valor = [3, 7, 9, 1, 6], resultadoo= [ 1, 1, 1, 0, 0.2727272727272727 ], precioContenedor= 20.636363636363637', () => {
    let resultado_obtenido = precioDelContenedor([3, 7, 9, 1, 6], [ 1, 1, 1, 0, 0.2727272727272727 ]);
    let resultado_esperado = 20.636363636363637;
    expect(resultado_obtenido).toBe(resultado_esperado);
});

test('en todos lo casos debe retornar 24, que es el peso máximo', () => {
    let resultado_obtenido = compararElPeso([3, 12, 6, 8, 11], [ 1, 1, 1, 0, 0.2727272727272727 ]);
    let resultado_esperado = 24;
    expect(resultado_obtenido).toBe(resultado_esperado);
});