//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

const edadDeUsuario =18
let ingresosDeUsuario = 1000

function calcularImpuestos (edad,ingresos){  //este es el nombre de la funcion y se le asignan los parametro que va a tomar
    if(edad >= 18 && ingresos >= 1000); //le decimos que si la variable edad es mayor o igual a 18 y la variable ingresos es mayor o igua a 1000 seguira con la funcion
        else return 0 //le decimos que si no cumple con las condiciones retornara (0) 
            let porcentaje = (ingresos * 40) / 100 //creamos una variable y le asignamos la operacion que hace que a ingresos le saque el 40%
            return porcentaje //imprimimos el resultado
}

console.log(calcularImpuestos(edadDeUsuario,ingresosDeUsuario))