/*Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.
Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

function likes(i){

    let primerDigito = likes.toString().charAt(0);

    if(i < 1000)
        console.log(i)
    else if(i >= 1000 && i < 10000)
        console.log(primerDigito + "k") 
}

console.log(likes(5000))