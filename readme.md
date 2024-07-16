                                /////////  comandos para manejar la terminal   /////////

- cd '.\nombreDeLaCarpeta'      = entra a la carpeta que le indique
- cd..                          = retrocede una carpeta
- pwd                           = me dice en que ruta me encuentro




                                    ////////    comandos sobre git    ////////////

- git branch -m main                = con esto podemos cambiarle el nombre a nuestra rama de master a main

- git push -u origin main           = el primer push debe colocarse de esta manera

- git status                        = nos muestra lo que esta pasando con todos los ficheros que estamos trabajando

- git add .                         = guarda todos lo que se ha trabajado en los ficheros hasta el momento

- git commit -m "nombreDelCommit"   = toma la foto definitiva despues del git add y le agrega el nombre con el que se guarda la foto

- git log                           = muestra la informacion con fecha y hora de los commit que se han realizado
    * git log --graph               = es lo mismo que git log pero nos muestra los commits en forma de rama
    * git log --graph --decorate --all --oneline = es lo mismo que git log pero muestra los commit en una sola linea

- git push                          = este comando sube directamente los commits guardados a github 

- git checkout nombreDeFichero      = con este comando puedes eliminar todos los cambios que le hiciste a un fichero hasta el ultimo commit o foto
- git checkout numeroIdentificadorDelCommit = con este comando podemos movernos entre las ramas o commit que tenemos 
    
- git config --global alias.nombreDelAlias "comando que quiero lanzar" = de esta manera podemos ponerle un alias a un comando largo que utilicemos mucho

- git diff                          = con este comando revisamos los cambios que hemos hecho despues de haber hecho el ultimo commit(foto)

- git reset --hard numeroIdentificador = con este comando volvemos a un commit antrior borrando todos los commits que estan despues de el y podemos usarlo para volver asia adelante  tambien en caso de cometer error(((((  este comando es preferible usarlo en caso extremo ))))).
- git reflog con este comando podemos revisar el historial de cambios que hemos hecho, en caso de hacer un git reser por error.

- git tag nombreTag                 = con este comando tagueamos o identificamos nuestros commit, por ejemplo taguear nuestra primera version de app
- git tag                           = este comando es para revisar los tags que tenemos guardados 

- git branch nombreDeRama           = con este comando podemos crear una nueva rama en la que vamos a trabajar
- git switch nombreDeRama           = este comando lo uso para pasar de una rama a otra
- git merge nombreDeRama            = con este comando podemos unir las ramas en las que estamos trabajando 
- git branch -d nombreDeRama        = con este comando eliminamos las ramas en las que hemos terminado de trabajar

- git stash                         = con este comando hacemos un commit temporal en nuestro ordenador para evitar subirlo (pausar el trabajo)
- git stash list                    = con este comando vemos la lista de commits temporales que hemos realizado
- git stash pop                     = con este comando recuperamos la informacion de nuestro stash
- git stash drop                    = con este comando eliminamos la informacion guardada en nuestro stash 

- git fetch                         = se descarga el historial del repositorio sin los cambios
- git pull                          = se descarga el histotial del repositorio con los cambios (recomendado)




- .gitignore                        = esto es el nombre de un fichero para poner dentro de el los ficheros que quiero ignorar y no subir a mi github
* luego de crear el fichero ingreso a el y pongo **/nombreDelFichero

- https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf herramienta para saber cuales son los comandos mas importantes de git











                            ////////// javascript ///////////

.split("")                          = este metodo separa cada caracter de un string y lo combierte en un array.

.reverse()                          = este metodo invierte totalmente los elementos de un array.

.join("")                           = este metodo unifica un array de caracteres strings para volverlo un solo string.

? textoSiEsTrue : textoSiEsFalse    = con esto podemos colocar el texto que queramos retornar si la respuesta es true o false

//                                  = esto nos sirve para poner comentarios de una sola linea en nuestro codigo
/**/                                = esto nos sirve para hacer varias lineas de codigo





**** operadores aritmeticos y comparativos javascript ****

%           = se le llama modulo y se usa para saber si un numero es divisible por otro ya que si no lo es nos muestra el numero restante de la division
ejemplo: 10 % 3 = 1

**          = se le llama exponente se usa para saber el resultado de un numero al cuadrado, al cubico, etc 
ejemplo: 10 ** 3 = 1000

==          = operador de igualdad devil: primero intenta hacer conversiones necesarias antes de compararlos a ver si son iguales
ejemplo: 10 == "10"  (true)

===         = operador de igualdad estricta: es para ver si los valores son del mismo tipo y mismo valor, en caso de que no lo sean devolvera false
ejemplo: 10 === "10" (false)

!=          = operador de desigualdad devil: primero intenta hacer conversiones necesarias antes de compararlos a ver si son desiguales
ejemplo: 0 != "0"    (false) 

!==         = operador de desigualdad estricta: es para ver si los valores son totalmente de diferente tipo y valor si son diferentes arrojara false
ejemplo 0 !== "0"    (false)






                        ////////// herramientas y apps utiles para programacion //////////

1. charts.css                       = es una framework de css que me puede ayudar a hacer graficas.

2. pagespeed insights               = nos ayuda a revisar que cosas podemos optimizar de nuestra pagina para darle un mejor rendimiento

3. yesicon                          = esta app me proporciona iconos para mis apps

4. https://retosdeprogramacion.com  = en esta pagina puedo resolver retos de programacion para mejorar mis habilidades

5. leetcode                         = es esta app tambien puedo resolver retos de programacion para mejorar mis habilidades de programacion























                       ///////////  trabajos para practicar codigo  ////////////

1. hacer un bucle con while en el que hagas una cuenta atras para lanzar un cohete. 
    - adeñadirle un bucle anidado que haga tres revisiones por cada numero que cuenta atras

2. hacer un condicional que verifique si un usuario es mayor de edad, si es casi mayor de edad o si es menor de edad.
    - tambien que revise si tiene licencia de conducir
    - por ultimo que devuelva un mensaje diciendo("puedes conducir" o "no puedes conducir")

3. hacer un bucle con for para contar los numeros de 1 a 100.
    - indicando cuales son los numeros pares y los numeros impares
    - tambien vas a hacer que el bucle se detenga en el numero 50
    - tambien vas a hacer que el codigo omita imprimir numeros impares

4. crear un objeto, con propiedades, arrays, objetos anidados y con una funcion dentro del objeto.
    - utilizar el codigo "for in" para ver las propiedades del objeto
    - imprimir el resultado del metodo(function dentro del objeto)
    - hacer una constante para sacar una propiedad del objeto y cambiarla de nombre
    - hacer una constante para sacar varias propiedades para luego no estar entrando en el objeto a imprimirlas
    - eliminar una propiedad del objeto
    - agregar un objeto

5. crear una funcion que diga si un string es palindromo o no.