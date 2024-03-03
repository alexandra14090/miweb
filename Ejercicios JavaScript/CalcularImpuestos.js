function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4; // Calcula el 40% de los ingresos
    } else {
        return 0; // Retorna 0 si no cumple con los criterios
    }
}

// Código de prueba
console.log(calcularImpuestos(18, 1000));  // Salida esperada: 400
console.log(calcularImpuestos(40, 10000)); // Salida esperada: 4000
console.log(calcularImpuestos(17, 5000));  // Salida esperada: 0
console.log(calcularImpuestos(30, 500));   // Salida esperada: 0
