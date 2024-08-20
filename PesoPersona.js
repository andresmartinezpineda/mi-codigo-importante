/*El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/


let pesoUsuario = 135
let alturaUsuario = 1.7


function BMI (peso,altura){
    let formula = peso / ( altura^2 )
    console.log(formula)
    if(formula < 18.5)
        console.log("usted esta bajo de peso");
    else if(formula >= 18.5 && formula <= 24.9)
        console.log("su peso es normal");
    else if(formula >= 25 && formula <= 29.9)
        console.log("usted tiene sobrepeso");
    else if(formula > 30)
        console.log("usted tiene obesidad");
}

console.log(BMI(pesoUsuario,alturaUsuario   ))