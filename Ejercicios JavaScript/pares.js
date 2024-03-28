function pares(arreglo) {
    // Filtra los elementos del arreglo incluyendo solo los números pares
    return arreglo.filter(numero => numero % 2 === 0);
}

// Código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // Salida esperada: [2, 4, 6]
console.log(pares([]));                // Salida esperada: []
