function removerCeros(arreglo) {
    // Filtra los elementos del arreglo excluyendo los ceros (0)
    return arreglo.filter(elemento => elemento !== 0);
}

// Código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // Salida esperada: [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4]));      // Salida esperada: [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0]));         // Salida esperada: []
