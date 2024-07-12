//crear una function para saber si un string es palindromo

function esPalindromo(cadenaDeTexto){
    let array = cadenaDeTexto.split("")  // split("") se utiliza para combertir nuestro parametro en un array separando los caracteres
    let reverse = array.reverse() //reverse() se utiliza para poner totalmente al reves nuestro array
    return cadenaDeTexto == reverse.join("")? 'si es': 'no es'  //join("") se utiliza para unir nuestro array fomrando nuevamente la cadena de texto, pero en este caso invertida. tambien vemos que el signo de pregunta verifica si es (true) e imprime "si es" y los dos puntos verifican si es (false) e imprime "no es"
}

console.log(esPalindromo('amor a roma'))
