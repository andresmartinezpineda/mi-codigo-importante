function esPalindromo(cadena){
    let array = cadena.split("");
    let reverser = array.reverse();

    return cadena == reverser.join("")? 'es palindromo': 'no es palindromo'
}





function split(cadena){
    let resultado = cadena.split("")

    console.log(resultado)
}


console.log(split('hola, mundo'))