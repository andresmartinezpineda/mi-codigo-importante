function esPalindromo(cadena){
    let array = cadena.split("");
    let reverser = array.reverse();

    return cadena == reverser.join("")? 'es palindromo': 'no es palindromo'
}

console.log(esPalindromo('osos'))