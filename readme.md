# BASE DE DATOS DE PROGRAMACION POR: ANDRES MARTINEZ

## comandos para manejar la terminal

- cd '.\nombreDeLaCarpeta'      = entra a la carpeta que le indique
- cd..                          = retrocede una carpeta
- pwd                           = me dice en que ruta me encuentro




##  comandos sobre git

- git branch -m main                = con esto podemos cambiarle el nombre a nuestra rama de master a main

- git push -u origin main           = el primer push debe colocarse de esta manera

- git status                        = Muestra el estado de los archivos, indicando si hay cambios sin confirmar o archivos nuevos.

- git add .                         = Agrega todos los cambios realizados en los archivos al área de preparación (staging area) para el próximo commit.

- git commit -m "nombreDelCommit"   = toma la foto definitiva despues del git add y le agrega el nombre con el que se guarda la foto

- git log                           = muestra la informacion con fecha y hora de los commit que se han realizado
    * git log --graph               = es lo mismo que git log pero nos muestra los commits en forma de rama
    * git log --graph --decorate --all --oneline = es lo mismo que git log pero muestra los commit en una sola linea

- git push                          = Sube los commits guardados localmente a GitHub o al repositorio remoto. 

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
- git clone                         = se clona un proyecto en el que se vaya a trabajar





- .gitignore                        = esto es el nombre de un fichero para poner dentro de el los ficheros que quiero ignorar y no subir a mi github
* luego de crear el fichero ingreso a el y pongo **/nombreDelFichero

- https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf herramienta para saber cuales son los comandos mas importantes de git


## repositorio colaborativo con HTPPS 

1. voy al github de la persona que tiene el proyecto original

2. oprimo el boton fork en la parte superior derecha del repositorio

3. le pongo el nombre que desee al repositorio

4. selecciono si quiero copiar solo la rama main o todas las ramas

5. crear fork

6. hago el git clone proyecto que ahora esta en mi repositorio

7. antes de empezar a hacer cambios al repositorio de oprimo en la parte superior de los commits(sync fork) para saber si el codigo esta al dia con el original

8. luego de haber hecho los cambios le oprimo al lado de (sync fork) donde dice(contribute) luego le oprimo open pull request

9. aqui agregamos el nombre del commit que hicimos en el repo y tambien podemos agregarle un comentario


((((((A partir de este momento entra en accion la persona dueño el repositorio original ))))))

1. revisa los pull request en la parte superior derecha

2. va a files changed

3. oprime en el boton verde (review changes)

4. aca elige si quiere 
    * enviar solo un comentario
    * aprovar (tambien si quieres puedes poner un comentario)
    * pedir cambios a lo que quieres que te apruebe

5. oprime (merge pull request) y (luego confirm merge)








## javascript 

´.split("")´                          = este metodo separa cada caracter de un string y lo combierte en un array.

´.reverse()´                          = este metodo invierte totalmente los elementos de un array.

´.join("")´                           = este metodo unifica un array de caracteres strings para volverlo un solo string.

´? textoSiEsTrue : textoSiEsFalse´    = con esto podemos colocar el texto que queramos retornar si la respuesta es true o false

//                                  = esto nos sirve para poner comentarios de una sola linea en nuestro codigo

/**/                                = esto nos sirve para hacer varias lineas de codigo














## aprendiendo react


### primeros pasos para crear una app en react

1. ponemos en nuestra terminal el codigo ´npx create-react-app mi_app´ (mi_app puede ser reeamplazado por el nombre que desee ponerle a mi aplicacion)
2. luego desde la terminal entramos a nuestra app con ´cd mi_app´
3. por ultimo pomemos npm start y ya tenemos nuestros archivos nesesarios para crear nuestra app react y emprezar a programar

### curso de react

lo que aprendere en este curso es:

- conceptos basicos de React
- terminos con Babel
- WebPack
- jsx
- componentes 
- props 
- states
- useEffect
- ciclos de vida

- tambien aprendere a crear apps simples con todos los conocimientos de este curso









### informacion importante a tener en cuenta 

- en el HTML hay una etiqueta <script type = "module" src="/src/main.jsx"><script> esto nos indica el fichero principal con el que estaremos trabajando(punto de entrada)

- iniciando nuestro proyecto en jsx podemos eliminar todos los archivos de la carpeta src y dejar unicamente <assets> y nuestro punto de entrada <main.jsx>











### creacion de componentes react

- los componentes se escriben en PascalCase

- los componentes se crean en la carpeta (src) con la extencion .jsx

- luego de crear el archivo con el componente, lo primero que ponemos antes de nuestra funcion es <export>, ejemplo:

export function App(){....}

- luego de esto vamos a nuestro punto de entrada y ponemos en la parte superior <import> con la ruta del componente, ejemplo:

import { App } from './App.jsx'

- para usar el componente en el codigo voy a poner <App />



### como estilar los componentes

1. voy a crear un archivo con la estencion .css

2. lo importamos a nuestro que queremos estilar, EJEMPLO, supongamos que el nombre del archivo es App.css:

import 'App.css'

3. para identificar y estilar nuestros componenetes es importante ponerles clases de la siguiente manera 
    * className ... EJEMPLO
    <article className = 'miArticle'>




### preguntas importantes de react

1.  ¿cual es la base de la reutilizacion en react?
la base de la reutilizacion en react son los parametros de los componentes





















## programacion orientada a objetos


### cada objeto tiene datos y funcionalidad 

#### datos = atributos             = los atributos son los datos que le proporcionamos al objeto como:
nombre:
apellido:
correo: 
etc.

#### funcionalidad = metodos       = los metodos son las funciones que tiene el objeto, por ejemplo si es un usuario las funciones serian:
editar perfil
cerrar sesion
cambiar contraseña
etc

#### instanciar                    = es crear un objeto por medio clase  (la clase es una plantilla que le damos a una app para crear objetos)ejemplo:
clase{ 
    nombre:
    funcionQueCumple:
}

intancia1{ 
    nombre: "nevera"
    funcionQueCumple: "enfriar la comida"
}

intancia2{ 
    nombre: "estufa"
    funcionQueCumple:"cocinar la comida"
}

### abstraccion
sintaxis = la abstraccion es pensar que atributos y metodos va a tener nuestra clase

### Encapsulamiento
sintaxis = tal como lo indica su nombre es el encapsular un objeto de esta manera evita crear errores y que un objeto no interfiera en el funcionamiento del otro

### polimorfismo
sintaxis = es polimorfismo significa que podamos darle la misma orden a diferentes objetos y todos lo hagan a su manera cumpliendo su funcion. Ejemplo:


### herencia
sintaxis = es lo que un objeto le hereda al otro sin nesecidad de que funcione exactamente igual, por ejemplo

la clase padre tiene la funcion de crear un usuario, pero le creamos una clase hijo la cual tambien crea usuario pero en este caso sera un usuario profesor
luego tambien hay otra clase hijo que tambien deja crear usuario pero en este caso sera administrador,


la encapsulacion busca que cada objeto sea responsable de su propia informacion y su propio estado

#### getters y setters

los getters = es la herramienta que usamos para ver los valores y 

























## operadores aritmeticos y comparativos javascript

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






## herramientas y apps utiles para programacion

1. charts.css                       = es una framework de css que me puede ayudar a hacer graficas.

2. pagespeed insights               = nos ayuda a revisar que cosas podemos optimizar de nuestra pagina para darle un mejor rendimiento

3. yesicon                          = esta app me proporciona iconos para mis apps

4. https://retosdeprogramacion.com  = en esta pagina puedo resolver retos de programacion para mejorar mis habilidades

5. leetcode                         = es esta app tambien puedo resolver retos de programacion para mejorar mis habilidades de programacion

6. markmap                          = crea mapas explicando como funciona un codigo, normalmente se usa para pedir que esplique algo que hizo chat gpt

7. mermaid AI                       = genera graficos a partir del lenguaje que utilizamos para programar, se usa comunmente para chat gpt









## extenciones que me pueden servir para mi vscode

((( las siguientes fueron sacadas de un video de victor robles https://www.youtube.com/watch?v=PTpWW05TpUc )))

1. html to css autocompletion       = me permite reconocer en mi css las clases que tengo puestas en mi HTML

2. bookmarks                        = me permite resaltar codigo importante

3. CSS peek                         = me permite darle click a una clase y me envia directamente al css de esta clase

4. ES7+React/redux/React-Native snippets = nos da atajos para hacer codigo mas rapido

5. eslint                           = nos ayuda a tener un codigo mas ordenado

6. material icon theme              = nos muestra los iconos de nuestros diferentes archivos

7. one dark pro                     = da un color bonito a nuestro vscode






## Mi diccionario de programacion

- componente (react) = un componente es una pieza de codigo encapsulada que puede ser reutizilable

componentes funcionales: Son funciones de JavaScript que aceptan un objeto de propiedades (llamadas “props”) y devuelven elementos de React.

componentes de clase: Se definen utilizando clases de ES6 y extienden la clase React.Component 

- renderizar (react) = 







- scrum             = a continuacion dejo el enlace de mi presentacion en mapa mental  
https://mm.tt/app/map/3369819265?t=72GivyLvcQ

















## trabajos para practicar codigo

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

