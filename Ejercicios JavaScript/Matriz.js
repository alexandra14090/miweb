function imprimirMatriz(matriz) {
    // Itera sobre cada fila de la matriz
    for (let fila of matriz) {
        // Itera sobre cada elemento de la fila e imprímelo
        for (let elemento of fila) {
            console.log(elemento);
        }
    }
}

// Código de prueba
imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
        