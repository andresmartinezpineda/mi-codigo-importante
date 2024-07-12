

function esPalindromo(cadenaDeTexto){
    let array = cadenaDeTexto.split("")   
    let reverse = array.reverse() 
    return cadenaDeTexto == reverse.join("")? 'si es': 'no es' 

console.log(esPalindromo('amor a roma'))
}
