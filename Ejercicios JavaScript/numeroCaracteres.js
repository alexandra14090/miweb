function numeroDeCaracteres(cadena, caracter) {
    let count = 0; // Inicializa un contador en 0

    // Itera sobre cada caracter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Compara el caracter actual con el caracter dado
        if (cadena[i] === caracter) {
            count++; // Incrementa el contador si el caracter coincide
        }
    }

    return count; // Devuelve el contador que representa el número de veces que aparece el caracter
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // Salida esperada: 2
console.log(numeroDeCaracteres("MMMMM", "m"));    // Salida esperada: 0
console.log(numeroDeCaracteres("eeee", "e"));     // Salida esperada: 4
