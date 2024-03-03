function likes(numero) {
    if (numero < 1000) {
        return numero.toString(); // Devuelve el mismo número como cadena si es menor que 1000
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(1) + 'K'; // Convierte a K si es menor que un millón
    } else {
        return (numero / 1000000).toFixed(0) + 'M'; // Convierte a M si es mayor o igual a un millón
    }
}

// Código de prueba
console.log(likes(983));      // Salida esperada: "983"
console.log(likes(1900));     // Salida esperada: "1K"
console.log(likes(54000));    // Salida esperada: "54K"
console.log(likes(120800));   // Salida esperada: "120K"
console.log(likes(25222444)); // Salida esperada: "25M"

//preguntar 