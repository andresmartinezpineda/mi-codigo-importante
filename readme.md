


                                /////////  comandos para manejar la terminal   /////////

- cd '.\nombreDeLaCarpeta'      = entra a la carpeta que le indique
- cd..                          = retrocede una carpeta
- pwd                           = me dice en que ruta me encuentro




                                    ////////    comandos sobre git    ////////////

- git branch -m main                = con esto podemos cambiarle el nombre a nuestra rama de master a main

- git push -u origin main            = el primer push debe colocarse de esta manera

- git status                        = nos muestra lo que esta pasando con todos los ficheros que estamos trabajando

- git add .                         = guarda todos lo que se ha trabajado en los ficheros hasta el momento

- git commit -m "nombreDelCommit"   = toma la foto definitiva despues del git add y le agrega el nombre con el que se guarda la foto

- git log                           = muestra la informacion con fecha y hora de los commit que se han realizado
    * git log --graph               = es lo mismo que git log pero nos muestra los commits en forma de rama
    * git log --graph --decorate --all --oneline = es lo mismo que git log pero muestra los commit en una sola linea

- git push                          = este comando sube directamente los commits guardados a github 

- git checkout nombreDeFichero      = con este comando puedes eliminar todos los cambios que le hiciste a un fichero hasta el ultimo commit o foto
    * git checkout numeroIdentificadorDelCommit = con este comando podemos movernos entre las ramas o commit que tenemos 
    
- git config --global alias.nombreDelAlias "comando que quiero lanzar" = de esta manera podemos ponerle un alias a un comando largo que utilicemos mucho

- git diff                          = con este comando revisamos los cambios que hemos hecho despues de haber hecho el ultimo commit(foto)

- git reset --hard numeroIdentificador = con este comando volvemos a un commit antrior borrando todos los commits que estan despues de el y podemos usarlo para volver asia adelante  tambien en caso de cometer error(((((  este comando es preferible usarlo en caso extremo ))))).
    * git reflog con este comando podemos revisar el historial de cambios que hemos hecho, en caso de hacer un git reser por error.



- .gitignore                        = esto es el nombre de un fichero para poner dentro de el los ficheros que quiero ignorar y no subir a mi github
    * luego de crear el fichero ingreso a el y pongo **/nombreDelFichero













                       ///////////  trabajos para practicar codigo  ////////////

1. hacer un bucle con while en el que hagas una cuenta atras para lanzar un cohete 
    - adeñadirle un bucle anidado que haga tres revisines por cada numero que cuenta atras

2. hacer un condicional que verifique si un usuario es mayor de edad, si es casi mayor de edad o si es menor de edad
    - tambien que revise si tiene licencia de conducir
    - por ultimo que devuelva un mensaje diciendo("puedes conducir" o "no puedes conducir")

3. hacer un bucle con for para contar los numeros de 1 a 100 
    - indicando cuales son los numeros pares y los numeros impares
    - tambien vas a hacer que el bucle se detenga en el numero 50
    - tambien vas a hacer que el codigo omita imprimir numeros impares

4. crear un objeto, con propiedades, arrays, objetos anidados y con una funcion dentro del objeto
    - utilizar el codigo "for in" para ver las propiedades del objeto
    - imprimir el resultado del metodo(function dentro del objeto)
    - hacer una constante para sacar una propiedad del objeto y cambiarla de nombre
    - hacer una constante para sacar varias propiedades para luego no estar entrando en el objeto a imprimirlas