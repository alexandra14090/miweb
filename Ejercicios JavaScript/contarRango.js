function contarRango(num1, num2) {
    let count = 0; // Inicializa un contador en 0

    // Itera sobre el rango de números entre num1 (exclusivo) y num2 (exclusivo)
    for (let i = num1 + 1; i < num2; i++) {
        count++; // Incrementa el contador en cada iteración
    }

    return count; // Devuelve el contador que representa la cantidad de números en el rango
}

// Código de prueba
console.log(contarRango(1, 9));    // Salida esperada: 7
console.log(contarRango(1332, 8743)); // Salida esperada: 7410
console.log(contarRango(5, 6));     // Salida esperada: 0
