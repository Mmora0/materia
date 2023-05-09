# Esta es la documentación de la Sesión 1

Desarrollador por: MIGUEL ANGEL MORA ORTIZ
Programa: DESARROLLO DE VIDEOJUEGOS Y ENTORNOS INTERACTIVOS
SENA
Ibagué, Tolima 
Colombia

Clase 1 - Programación básica
Introducción al curso



Clase 2 

*variable - datos de corto tiempo


*función  - serie de código largo o corto que tiene un objetivo 
         
     * una función se invoca, mediante parentesis
     * dentro del parentesis va el parametro, que es el valor para la función

Programar: controlar el flujo de acciones que ocurren dentro de una computadora. Dominar la computadora




Clase 3


ARCHIVOS

*archivo.extensión
*carta.docx
*hoja.xls
*pagina.html

Crear un archivo no importa cual, todos son de inserción de texto.

Podemos usar un bloc de notas para maquetar en html

Etiquetas usadas:
<h1></h1>
<strong></strong>




Clase 4

HTML es un lenguaje que funciona como un árbol


Etiquetas usadas:
<html></html>
<head></head>
<title></title>
<body></body>
<h1></h1>
<p></p>
            




Clase 5

Script {etiqueta para código}


Orden de lectura=
html > head > title > script > body > h1 > p


Cuando se empieza la lectura de arriba hacia abajo, hay que dar primero los valores, luego la operación (alert), de esta manera =          alert("mensaje" + (operación de los valores dados)) El "+" por fuera de una operación es para unir, no sumar.     

*Cuando se unen dos o más valores, se llama concatenación.





Clase 6


meta charset="utf-8" />

 utf-8 = Estandar que nos permite agregar tildes, eñes y demás detalles de nuestro lenguaje.




Clase 7

Cómo se declara una variable?
	La forma correcta de hacerlo es reservando el nombre en la memoria para luego usarla en nuestra aplicación

(let) = Nos permite designar variables
(prompt) = Nos permite obtener un texto



Clase - 8

Condicional: Es un código que solo se ejecuta si la condición se cumple

(if) = Para determinar la condición
({}) = nos permite introducir el código que se va a ejecutar
(else if) = se usa para realizar el código en cascada si la primera condición no se cumple
(else) = se  usa cuando niguna de las otras condiciones se cumplen

Cuando se utiliza solo un '=' es para asignación (esto entra dentro de esto)
Utilizando dos '==' es para comparación (esto es igual a esto)



Clase - 9

(&&) = Para comparar dos cosas al mismo tiempo 

Se deben tener en cuenta todas laa opciones que se nos den, para que no queden condiciones libres 


Clase - 10

Para crear un número aleatorio en computadora se hace un rango de 0 a 1.

(Math.floor) = función utilizada para quitar decimales "Math" es la clase. '.' llama la función y "floor" el nombre de la función
(Math.random) = función para generar números aleatorios, entre 0 y 1.

Para programar un número aleatorio en un rango:

	min = 1   max = 3
	n = Math.floor(Math.random()*(max-min+1)+min)
	     

(function) = son parecidas a las variables
(return) = 



Clase - 11


Ejemplo de una función:
					comida = traer (sandwich, tienda)

*  El nombre de una función es un nombre de variable, los nombres de variable es una buena práctica que empiece con una letra y esta sea minuscula. Se coloca entre parentesis los parametros que le ponemos a la función y cada parametro separado por una coma ','. El "return" es para el paramet que quiero devolver

*alert = es una fución return, que no retorna nada. Realiza una acción = mostrar texto

Todo parentesis, corchetes, comillas que se abren se tienen que cerrar. 
Si hay un bloque dentro de un código, por buena práctica, gráficamente debe estar dentro de la función que lo abre.






Clase - 12


* Condiciones

Las condiciones se usan para cerrar un ciclo, para que esta no se repita infinitamente

Ejemplo:
		Mientras    { haya comida en el plato
			y 	{ tenga hambre

	 	-cuando sí	 =   comer(plato)

		-cuando no	 =   parar de comer()
				     limpiar(plato)

* Agregar un ciclo de 3 partidas en el juego.




Clase - 13

Instrucciones: son términos nativos de lenguajes de programación que modifican el flujo del código.

(while) = Le dice a la computador que siga haciendo un ciclo mientras una condición sea verdadera.



Clase - 14

Ruta absoluta = Una dirección detallada sobre una carpeta/archivo
Posición relativa = La ubicación sola del archio/carpeta que queremos abrir/trabajar


Clase - 15

D.O.M. = Es la forma en la que el navegador estructura las etiquetas html para que se pueda manipular en código de javascript 

window = Es cada una de las pestañas del navegador. Suceden los eventos del navegador
document =  Se ejerce especificamente lo que se encuentre dentro de la etiqueta html

	botón > click > función } Escuchador de eventos

* Por buena práctica el button, debe ir dentro de un contenedor


Clase - 16

Maquetar - Maquetación = Crear estructura y contenido de una página web 

* Defición del proyecto a realizar, contenido, textos, botones, etc.

etiquetas usadas =

(section)
(h2)
(id)
(button)
(span)




Clase - 17

etiquetas usadas =

(input)
(label)

atributos = 
(type)
(name)
(for)




Clase - 18


Para llamar una función en Javascript, no se debe separar por guiones sino pegados y cada palabra diferente con una Mayuscula

(let)
(document.getElementById)
(.addEventeListener)
(function)

Tenemos que ser cuidadosos si no posicionamos correctamente linkeando los scripts en el html, no se leerá lo que estemos haciendo, ya que la lectura de arriba hacía abajo, leerá el script como algo vacío.




Clase - 19

 Para no tener que estar preocupados por la posición del link del archivo javascript en nuestro html, tenemos que usar otro evento en el archivo de js = window.addEventListener('load', 'nombre de la función') y luego incluir la función (function + 'nombre de la función') y luego agregar dentro de esta función las operaciones que necesitemos

Ya nuestro botón y alerta nos menciona que hemos seleccionado una mascota, pero necesitamos saber cuál mascota, para eso usaremos un condicional = 

					>	(if (input1.checked)) 
						"name del input"
						>	(else if (input2.checked)) 
							"name del input"
						>	(else if (input3.checked)) 
							"name del input"

* el checked lo usamos para el input de tipo 'radio', para corroborar que ese fué "seleccionado"





Clase - 20

En esta clase asignamos las condicionales de cada mascota, según la elección del usuario, haciendo uso de (function), (let), (if), (else if), (else) y además asignando las respectivas (input) por cada elemento.

Haciendo que se le muestre al usuario la elección que haya realizado en pantalla.



Clase - 21

Metodos de manipulación de D.O.M.

Documentación = Es una explicación de cómo funcionan ciertas tecnologías, donde podremos encontrar como utilizar distintas funciones, propiedades y metodos de JS, entre otros.

Metodo innerHTML = Encontraremos documentación que podremos encontrar de Mozilla

innerHTML = Muestra lo que tenemos dentro de la etiqueta, sin mostrar las etiquetas. 
	* Podemos usar esto para cambiar lo que tenemos dentro de la etiqueta





Clase - 22

Asignamos a la Computadora la elección automatica de una mascota, haciendo uso de la operacion matematica (Math.random), asignando a cada mascota un número para asignarlo aleatoriamente al pc. generamos la función de 'seleccionarMascotaEnemigo' y 'spanMascotaEnemigo' junto con el 'inner.HTML' para llamar los inputs que se encuentran en html





Clase -23


		HTML					JS


		BtnFuego	   ---		  let ataqueJugador
					|		   ataqueFuego(){
					-----	>	    ataqueJugador = Fuego
							  }
		BtnAgua				   ataqueAgua(){
						>	    ataqueJugador = Agua
							  }
		BtnTierra				   ataqueTierra(){
						>	    ataqueJugador = Tierra


	* Variables Globales 

Se seleccionaron los ataques del jugador




Clase - 24

Se asignarion los ataques del computador, haciendo uso de los numeros aleatorios, designando un numero por ataque.






Clase - 25



Metodos usados =

(createElement) = Document.createElement = Nos ayuda a crear nuevos elementos en JS
(appendChild) = Document.appendChild = Nos ayuda a agarrar elementos de JS para ponerlos en HTML




Clase - 26

Se generó la función 'crearMensaje', para que el resultado de los ataques de ambas mascostas se muestre junto con los ataques de cada uno




Clase - 27

Operador && = AND



TABLA DE VERDAD > AND

Condición 1		Operador	Condición 2			Resultado

Verdadero		AND		Verdadero		>	Verdadero
Verdadero		AND		Falso			>	Falso
Falso			AND		Verdadero		>	Falso
Falso			AND		Falso			>	Falso



TABLA DE VERDAD > OR

Condición 1		Operador	Condición 2			Resultado

Verdadero		OR		Verdadero		>	Verdadero
Verdadero		OR		Falso			>	Verdadero
Falso			OR		Verdadero		>	Verdadero
Falso			OR		Falso			>	Falso



Condición 1		Operador	Resultado 

Verdadero		NOT		Falso
Falso			NOT		Verdadero	



	AND > &&
	OR  > ||
	NOT > !


Clase - 28

Se realizaron la resta de vidas según el ataque que hiciera cada mascota, como del jugador y del enemigo



Clase - 29

Agregamos mensaje para saber si perdimos o ganamos la pelea, añadiendo la lógica, programando un mensaje final con otra funcion.


Clase - 30

(location.reload ()) = recarga la pagina html 

Anclamos el reinicio de la página al botón

Atributo (disabled) = cancela la opción de pulsar un botón

Deshabilitamos los botones de ataque usando el atributo 'disabled', aplicandolo desde JS






Clase - 31

Dividiremos las secciones para que se muestre y oculten, segú como avance el juego.

Propiedad (style.display) = Modificar los estilo en html desde JS

Colocamos el estilo none para que no se muestre y luego block cuando queremos que esté

Clase - 32

CSS trabaja de la mano con HTML, se crea un vinculo entre el archivo de css y html, este vinculo es conocido como "SELECTOR"  

Tipos de Selectores;

	* Tipo = Es el mismo nombre de la etiqueta que se encuentra en html
	* Clase = Este atritbuto sirve para poder seleccionar diferentes etiquetas, sin importar su diferencia y darles el mismo estilo
	* id = Este selector funciona igual que el de clase, pero no se usa tan frecuente.

 Para poder funcionar el selector que escojamos, debemos usar las llaves = '{ - }' para determinar los estilos que estos ocuparán.

	* Propiedades = Caracteristicas que le podemos dar a esos elementos de html (color, tamaño)
	* Valores = Corresponde a cada una de esas caracteristicas 

	
			>	Propiedad =  Rojo   		Caracteristica = Color
			> 	Propiedad = 10 px			Caracteristica = Tamaño

* Cuando usamos el selector de tipo Clase, lo debemos llamar en la hoja de estilos por el nombre de la clase que le hayamos puesto y le sumamos un punto '.' antes de la palabra, todo pegado

Si llamamos dos selectores a una misma etiqueta, no deberían tener un mismo nombre.

* Cuando usamos el selector de tipo Id, lo debemos llamar en la hoja de estilos por el nombre de que le hayamos puesto y le sumamon un númeral '#' antes de la palabra, todo pegado.


Las propiedades y valores, en su uso están escritas en inglés


		* (cssreference.io) = página que podremos ver los atributos que podemos encontrar y usar en CSS

		* (htmlcolorcodes.com) = página web que sirve para ver todos los códigos de color que podremos usar





Clase - 33

Tipos de visualización/ tipos de display = 

	* inline		=	Solo ocupa una parte de la pantalla
	* block		=	Ocupan toda la pantalla de izquierda a derecha
	*inline-block	=


Clase - 34

	flexbox = atributo para alinear elementos y acomodarlos en la web
	* Podemos ubicar elementos en la web como queramos

Contenedores > Elementos

Guía para el uso de CSS - flexbox = (css-tricks.com)

valores y caracteristicas usados=
						(display = flex)
						(flex-direction = column)
						(justify-content = center)
						(align-items = center)




Clase - 35

El modelo de caja nos permite editar, diseñar y asignar el contenido dentro y fuera de ella

	> Margin
		> Border 
			> Padding
				> Content

* El content se verá afectado si añadimos un padding y un border, el padding aumentará el tamaño de nuestra caja
 
	(box-sizing = border-box) == hace que el content no se vea afectado por el padding que usemos

Cuando usamos el margin no afecta nuestra caja y su contenido, sino su exterior

El tamaño de nuestro conten, se ve afectado el tamaño, al sumarse el tamaño del padding y el border



Clase - 36

Herramienta para el diseño Web = 

*Pinterest
	Busco de ideas de diseño, ilustración web

*colorhunt.co
	Diseño y paleta de colores para css

*google fonts
	Fuentes de cualquier estilo para nuestr página



Clase - 37

Se añadieron estilos al botón y se vió las diferentes tipos de margin = top, right, left, bottom 



Clase - 38

Hacer uso de una maquetación de nuestra web a lápiz, planificando de forma ordenada y bien hecha todos los elementos, agrupandolos y dando así una mejor inmersión para el usuario que esté en nuestra página



Clase - 39

Se recomienda estilizar y diseñar en css, desde el mas grande al más pequeño, en el orden que se encuentren dentro de cada contenedor


Layout = La parte primordial de nuestra página. 

Los estilos que se aplican en línea con el HTML son de más importancia que los de CSS





Clase - 40

*se me descuadró el JS * 

*se pudo solucionar el error*

Se añadió estilos a la caja de resultados del combate y el boton de reinicio de juego




Clase - 41

(grid - rejillas)


css-tricks.com > Grid
cssgridgarden.com > Juego interactivo para el aprendizaje de la herramienta Grid
flexboxfroggy.com > Juego interactivo para el manejo de la herramiento Flexbox




Clase - 42

@media = funcionamiento para el desarrollo de nuestra página web desde cualquier dispositivo




Clase - 43

Pseudo-clases = Nos sirve para la interacción que tenga el usuario con nuestra página web

	*hover: 	Sirve para agregar un estilo para cuando pasamos por encima el cursor
	*active:	cuando se pulsa el botón, se queda activa la función 
	*checked:	Esta como su nombre lo dice, chequea el input seleccionado

podemos fusionar dos elementos, ejemplo:
							input:checked + label {
									backgroung-color: red;
								}
esta función hará que la selección realizada no se haga solo en el input, sino también con el label


Clase - 44

Realizamos un chequeo de toda la estructura de nuestro código, verificando y viendo que puntos pueden ser optimizados y mejorados, para un mejor desarrollo y para posteriores cambios o adaptaciones

	* Se recomienda linkear el Js en la zona inferior de la estructura de nuestro html, para no generar bloqueos, 
	a la hora de carga de nuestra página, ubicado antes de cerrar el body

Esto nos asegura poder ver nuestra página y después obtener la interacción que queremos, mejorando así el funcionamiento de nuestra página.






Clase - 45

Organizamos nuestro javascript, sacando de las funciones las declaraciones, para mejorar el flujo.
Así mismo, al hacer esto, podemos notar que estamos repitiando algunas funciones, por lo que eliminamos estas que se repiten, ya que afectan el funcionamiento de nuestr página estando por fuera de las declaraciones.


Hay que revisar que cuando se retire una función de una declaración esta afecte directamente el html y no esté generando algo o creando un elemento nuevo.

Variables Let = son todas aquellas que su valor puede variar = un contador
Variables Const = Estas son las variables que son constantes y su valor siempre es el mismo = el titulo de la página


DRY = (Don't Repeat Yourself)





Clase - 46

Clases y Objetos = Uno depende y existe por el otro.


		* Planos de una casa 	= Clase
		* Casa 			= Objetos




Clase - 47

	*	Class = Para crear una clase en JS, es primordial que la palabra sea en mayúscula
	*	Constructor = Es una palabra reservada que sirve para "construir" (dentro de esta van las propiedades 			que lleven los objetos) [cosas especificas del objeto]
	*   	This = Esto mismo, la propiedad del objeto es igual a (se agrega un '.' y seguido el nombre de la 				propiedad)
	*	New = hace referencia a un nuevo objeto		(let (nombre) = new)
	*	console.log = Permite hacer mensajes en el navegador para ver cosas que nos interesen en el código
	




Clase - 48

Arreglos = tipo de variable para agrupar una cantidad de variables 


Clase - 49

Objetos instancia = se construyen utilizando una clase  
Objetos literario = se construyen desde cero, para guardar información


Clase - 50

Manipular el DOM con iteradores

Metodo: forEach = Por cada uno de nuestros arreglos, haz algo

Se hicieron modificaciones, cambiando nuestro HTML de ser estática a dinámica, mejorando el flujo de respuesta en el navegador, optimizando funciones



Clase - 51 

Declaración lenta de variables

Se optimiza desde JS generando los elementos de HTML y luego sus debidas acciones de cada elemento.

Debemos tener en cuenta que las etiquetas sean iguales que los valores asignados, incluso si hay o no una mayuscula





Clase - 52


(typeof) = nos ayuda a ver que tipo de elemento es

Realizamos y ajustamos fuentes de verdad para la selección de mascota para el jugador, llamando la variable por id y no por un texto. Para cuando necesitemos insertar más mascotas, no sea insertando nombre por nombre de cada mascota.


*Una sola fuente de verdad = Una variable que se va utilizar repetidamente





Clase - 53

Esta vez optimizamos la elección de la mascota enemigo, cambiando la elección de un numero segun la variable, (0, 'nombre de la función'.lenght -1) Empieza desde cero, agregamos la longitud que tenga la variable y un menos uno, para que se ajuste a la misma longitud

Ahora solo tenemos una fuente de verdad y no depende nuestro JS de números para elegir entre 0 a 2. optimizando el flujo del código





Clase - 54 

Creamos una función de loop, para cada vez que se elige un ataque



Clas - 55

Renderizamos los 5 ataques por mascota, generando sus botones. Ahora tenemos que asignar el ataque a los dos botones adicionales




Clase - 56

Eventos de click dinámicos

Agregaremos que por cada boton que se cree se le genere automaticamente su función


(querySelectorAll) = Seleccionar todos los elementos que tengan ese algo que necesitamos, por lo general seria una 'class'





Clase - 57

Secuencia de ataques del enemigo

Optimizamos la elección de ataques del enemigo, para mejorar el flujo del código, mejorando errores encontrados anteriormente


Clase - 58

Iniciando el combate

Aplicamos funciones en el manejo del combate, para seleccionar apartadamente nuestro ataque y a la vez la del enemigo, agrupando ambos ataques.


Clase - 59

Resolviendo el reto de condicionales


Clase - 60

Optimizando en frontend del juego


Clase - 61

Etiqueta <canvas> Nos dibuja un espacio rectangular dentro de nuestra pagina para poder dibujar sobre ella.

Este rectangulo funciona bajo un plano cartesiano, sobre el eje x y y

Cada punto que nos movamos sobre el plano cartesiano es un pixel


En esta clase, creamos la sección de canvas, creamos un recuadro para designar el mapa y añadimos un lienzo cuadrado para diseñar la cara de uno de las mascotas.

Cambiamos el lienzo que habiamos generado para convertirlo en la imagen de la mascota asignada



Clase - 62

En esta clase aprenderemos a movernos a traves del recuadro que hemos hecho con canvas

Creamos las funciones y variables necesarias para mover uno de nuestras mascotas através de la pantalla, haciendo solo uso del eje x

Usamos el alto y ancho del recuadro para asignarlo como fuente de movimiento para el personaje.


Clase - 63

Hicimos que nuestro personaje se mueva sin tener que estar pulsando click cada vez que queramos, sino que podemos tener oprimido el click y este se moverá. Hicimos uso del metodo "onmouseup" y "onmousedown"

También hicimos uso del método "setInterval" para definir el tiempo de respuesta del Objeto según cuanto tengamos oprimido el click sobre el boton para que este se mueva.


Clase - 64

