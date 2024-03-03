function sumarArreglo(arreglo) {
    let suma = 0; // Inicializa la suma en 0
    
    // Itera sobre cada elemento del arreglo y los suma
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    
    return suma; // Devuelve la suma de todos los elementos del arreglo
}

// Código de prueba
console.log(sumarArreglo([3, 1, 2])); // Salida esperada: 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Salida esperada: 55
console.log(sumarArreglo([])); // Salida esperada: 0
