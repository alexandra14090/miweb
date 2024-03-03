function distancia(cadena1, cadena2) {
    let diferencia = 0; // Inicializamos el contador de diferencia en 0
    
    // Iteramos sobre cada posición de las cadenas
    for (let i = 0; i < cadena1.length; i++) {
        // Comparamos los caracteres en la misma posición de cada cadena
        if (cadena1[i] !== cadena2[i]) {
            diferencia++; // Incrementamos el contador si los caracteres son diferentes
        }
    }
    
    return diferencia; // Devolvemos el número de caracteres diferentes
}

// Código de prueba
console.log(distancia("hola", "hola"));   // Salida esperada: 0
console.log(distancia("sol", "tol"));    // Salida esperada: 1
console.log(distancia("carro", "correr"));// Salida esperada: 3
