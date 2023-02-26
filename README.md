## Inicialización del proyecto

`npx create-react-app cineadicto --template redux`

Redux es una biblioteca de JavaScript que se utiliza para el manejo de estados en aplicaciones web. Fue creado por Dan Abramov en 2015 y se ha convertido en una de las bibliotecas más populares para el desarrollo de aplicaciones en tiempo real.

Redux se basa en la idea de que el estado de la aplicación debe ser almacenado en un único lugar centralizado y que las acciones realizadas en la aplicación deben ser procesadas a través de un único flujo de datos. Esto permite una gestión más fácil y una mayor previsibilidad en la aplicación, ya que se sabe exactamente cómo y cuándo se está modificando el estado.

Además, Redux es altamente escalable y se puede utilizar con diferentes bibliotecas y frameworks de JavaScript, incluyendo React. Es una herramienta muy útil para aplicaciones grandes y complejas, ya que proporciona un enfoque clara y organizado para el manejo de estados y acciones.

## `npm start`

### proceso de limpieza


### Importar las librerias

DEPRECADOS
<!-- ## `npm install @mui/material @emotion/react @emotion/styled`
## `npm install @mui/material @mui/styled-engine-sc styled-components` -->

<!-- @material-ui/core es un paquete de componentes de Material Design para React. Material Design es un diseño de Google que proporciona una guía para la creación de interfaces de usuario de aplicaciones web y móviles. @material-ui/core proporciona una amplia gama de componentes diseñados según los principios de Material Design, como botones, tarjetas, tablas, formularios, menús, iconos, etc.

Al utilizar @material-ui/core, los desarrolladores pueden ahorrar tiempo y esfuerzo en el diseño de la interfaz de usuario de la aplicación, ya que los componentes están diseñados y testados para cumplir con los estándares de Material Design. Además, los componentes son altamente personalizables, por lo que se pueden adaptar a la marca y al estilo de la aplicación.

En resumen, @material-ui/core es una herramienta valiosa para los desarrolladores de React que buscan crear aplicaciones con una interfaz de usuario atractiva y fácil de usar que cumpla con los estándares de Material Design. -->
### Se sustituye por Boostrap

## `npm install react-bootstrap bootstrap`
## `npm install axios`

Permite hacer fetch de una api
Axios es una librería de cliente HTTP basada en promesas para el lenguaje de programación JavaScript. Se utiliza para realizar solicitudes HTTP y manejar respuestas, como peticiones GET, POST, PUT, DELETE y más. Axios proporciona una interfaz sencilla y consistente para hacer solicitudes HTTP desde el lado del cliente, lo que la hace ideal para aplicaciones web y móviles.

Algunas de las características clave de Axios incluyen:

    Interfaz basada en promesas: Axios utiliza promesas para manejar respuestas a las solicitudes HTTP, lo que permite una programación más clara y concisa.

    Intercepción de solicitudes y respuestas: Axios permite interceptar solicitudes y respuestas antes de que se envíen o reciban, lo que permite manipular o transformar la información antes de su uso.

    Envío de datos en varios formatos: Axios permite enviar datos en formatos como JSON, formularios, archivos y más.

    Soporte para cancelación de solicitudes: Axios permite cancelar solicitudes en curso antes de que se completen.

En resumen, Axios es una librería potente y fácil de usar para realizar solicitudes HTTP y manejar respuestas en JavaScript, y es ampliamente utilizada en aplicaciones web y móviles.

## `npm install firebase`
Para gusradar el usuario y el proceso de login mas sencillo ya que nos da toda la funcionalidad, con toda la seguridad de Google.

Firebase es una plataforma en tiempo real de desarrollo de aplicaciones móviles y web de Google. Proporciona una amplia gama de herramientas y servicios para desarrolladores, incluyendo bases de datos en tiempo real, almacenamiento de archivos, autenticación de usuarios, análisis de aplicaciones, publicación de notificaciones y más.

Algunas de las características clave de Firebase incluyen:

    Base de datos en tiempo real: Firebase almacena y sincroniza datos en tiempo real, lo que permite a los desarrolladores construir aplicaciones que proporcionen una experiencia en tiempo real para los usuarios.

    Almacenamiento de archivos: Firebase permite almacenar y recuperar archivos en la nube, lo que simplifica el proceso de gestión de archivos en aplicaciones móviles y web.

    Autenticación de usuarios: Firebase proporciona una amplia gama de opciones de autenticación de usuarios, incluyendo inicio de sesión con correo electrónico y contraseña, inicio de sesión social y autenticación por contraseña.

    Análisis de aplicaciones: Firebase ofrece una potente plataforma de análisis de aplicaciones que permite a los desarrolladores comprender cómo los usuarios interactúan con sus aplicaciones y mejorar su experiencia.

    Publicación de notificaciones: Firebase permite a los desarrolladores enviar notificaciones a los usuarios de sus aplicaciones en tiempo real.

En resumen, Firebase es una plataforma integral de desarrollo de aplicaciones móviles y web que proporciona una amplia gama de herramientas y servicios para desarrolladores, y es ampliamente utilizada por desarrolladores de todo el mundo para crear aplicaciones móviles y web potentes y escalables.

## `npm install react-router-dom`
Se sustituye Switch por Routes, la nueva versión de react-router-dom ya no usa Switch (cambio de sintaxis)
react-router-dom es una librería de enrutamiento para aplicaciones web basadas en React. Le permite a los desarrolladores crear un sistema de navegación para su aplicación web, de manera que los usuarios puedan navegar entre diferentes páginas o componentes de su aplicación de manera fácil y eficiente.

react-router-dom proporciona componentes como <Route> y <Link> que permiten a los desarrolladores crear un sistema de navegación para su aplicación. Con <Route>, puede especificar qué componente debe renderizarse en una URL determinada, mientras que con <Link>, puede crear enlaces para navegar a diferentes partes de su aplicación.

Además, react-router-dom también proporciona componentes avanzados como <Switch> y <Redirect>, que permiten a los desarrolladores crear una navegación más compleja y personalizada para su aplicación.

En resumen, react-router-dom es una librería fundamental para cualquier aplicación web basada en React que requiera un sistema de navegación, y es ampliamente utilizada por desarrolladores de todo el mundo para crear aplicaciones web escalables y bien estructuradas.

## `npm install react-uuid`

crea un id único para nuestro componentes

react-uuid es una librería para React que proporciona funciones para generar identificadores únicos universales (UUID, por sus siglas en inglés). Un UUID es un valor alfanumérico único que se utiliza a menudo para identificar de manera única objetos o entidades en un sistema.

react-uuid proporciona una serie de funciones que generan diferentes versiones de UUIDs, incluyendo UUID versión 1, versión 3, versión 4 y versión 5. También proporciona una serie de utilidades para manipular y validar UUIDs generados.

La librería es útil en muchos casos, como cuando se desea asignar un identificador único a cada elemento de una lista o a cada objeto en una base de datos. Al utilizar react-uuid, los desarrolladores pueden generar fácilmente UUIDs únicos y confiables para cualquier propósito que requiera una identificación única.

## `npm install styled-components`

styled-components es una librería de JavaScript que permite crear componentes de estilo en React. Con styled-components, los desarrolladores pueden definir estilos en línea para sus componentes de React, lo que los hace más fáciles de personalizar y mantener.

La librería funciona creando componentes de estilo a partir de etiquetas HTML o componentes de React, y luego permitiendo que se les apliquen estilos con una sintaxis CSS similar. Los componentes de estilo se pueden utilizar en el mismo modo que cualquier otro componente de React, y se pueden incluso componer entre sí para crear estilos más complejos.

Además de proporcionar una forma más sencilla de aplicar estilos a componentes de React, styled-components también tiene algunas características adicionales que lo hacen muy útil para los desarrolladores. Por ejemplo, permite la inyección de estilos dinámicos basados en props, lo que significa que los componentes de estilo pueden ser personalizados en tiempo de ejecución. También permite la creación de temas y la reutilización de estilos en toda la aplicación, lo que ahorra tiempo y reduce la complejidad.


## App.js - layot inicial

- creación de las rutas
- Renderización Login o el resto de la app a la existencia de un usuario

## Estilos

<!-- - Uso de useStyles para crear una infraestructura que permita asignar estilos a cada uno de los componentes -->
- añadimos estilos globales estilos css con el archivo index.css

### Creación de la carpeta componentes: components, Pages

- creación de la infraestructura básica de los componentes que representan la página: Home, Login, Paypal, Profile, SignUp

### crear carpeta de components hijos

 creación de la infraestructura básica de los componentes que representan el resto de componentes Banner, Header, Rows, Plans

 ## Inicio trabajo con el componente Header

 - Importación del logo
 - añadir script para activar el modo transparente al scrolear, añadiendo un eventListener al objeto
 - El eventListener esta activo una vez cada vez que refrescamos la pagina
 - una vez montado el componente se limpis para que no quede colgado el eventListener
- añadir las rutas a logo y a avatar

### Inicio trabajo con el Banner

- Importación de la imagen como background image
- en React hay que acompañar las background images con estilos como object fit, background.size y background-position
- Posicionar el título de la película, unos botones y la descripción
- Como la descripción vendrá de la Api hay que truncarla para asegurarnos de que cabe. Para ello se declara la función truncate()
- Añadir div vacío, con un gradiente que oscurece la imagen hasta fusionarla con el resto de UI, que es oscuro

### Inicio trabajo Login 
 - Creación de botón en styles components, llamado StyledButton. Este botón está customizado y se podrá variar sus estilos, pasándole props.
 - Styled components para variar los estilos del input y del botón le damos una clase normal.
- Se ha creado un input personalizado con styled-components llamado StyledInput.

### Componente Profile
- distribución del componente
- Le pasamos al componente Plans, acepta props y children así también acepta el texto
- pasar los props a los Styled components
- EN el caso de que el componente no sea binario, p.ej que el tamaño sea pequeño, grande o mediano, lo solucionamos con una función y un switch

### Signup
- renderizado condicional. Se ha creado una variable SignIn
- Si la variable es false, desplegamos un formulario
### Proceso de registro / SignIn
- habilitado una cuenta en firebase
- captura de los datos insertados por el usuario en el formulario de registro
- inicializado el objeto auth
- registrado email y password con createUserWithEmailAndPassword
- signin con signInWithEmailAndPassword

### Redux

- habilitamos el slice userSlice para manejar el usuario en el componente que queramos

### Persistencia
- Hemos añadido un 'event listener' en App.js
este event lo trae el objeto auth, escucha cada vez que cambia el usuario firebase
- cada vez que cambia, vuelve a inyectar el usuario en la capa de datos de userSlice (Redux)
- De esta manera recordamos que ya estamos dentro aunque refresquemos la página

### Request
- construcción del componente Row
- Hemos habilitado todos los endpoints para acceder a themoviedb, para extraer los distintos objetos con toda la información clasificada por género
### Reuqests API
- con useEfect, hacemos llamadas asyncronas mediante una función,
a la que hemos llamado fetchData
- esta función devuelve request.results.data, que es un array con todas las peliculas
- las desplegamos en la ui
## 