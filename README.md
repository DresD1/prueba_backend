# prueba_backend
 
Versión de node 16.15.1!

$ npm install

1. Consumo de APIs
   En el archivo "index.js" se encuentra el código que consume la api de git para mostrar el tpo 10 de repositorios del usuario google. Para correrlo se debe utilizar el comando "node index.js", este nos imprimirá en consola el resultado de la api.
   
 2. Nomenclatura
    En el archivo "test.js" tenemos el código suministrado en la prueba, con una correcta nomenclatura y modificado para que pueda recibir variables en entorno de ejecución, dandonos como resultado la ejecución del mismo a partir del siguiente comando: "node test.js arg1 arg2 arg3".
    
    Nota: Los argumentos se inicializan por defecto en 0, por lo cual, si no se suministra al momento de ejecutarlo, este conservará su valor inicial.
    
3. Pensamiento lógico
   En el archivo "oddNumbers.js" se encuentra el código solicitado para la busqueda de números impares desde 0 hasta un valor suministrado como variable. Este archivo, al igual que el anterior, fue desarrollado para recibir variables en entorno de ejecución, y siendo utilizado de la siguiente forma: "node oddNumbers.js arg1"
   
   Nota: El programa solo funciona con 1 argumento, y al intentar suministrar más de uno (1), el programa imprime en consola una "alerta". De igual forma si no se le suministra ningun argumento.

4. Modelo de la base de datos

   Tenemos el siguiente modelo de base de datos
   ![image](https://github.com/DresD1/prueba_backend/assets/106494734/8dcb0e67-13eb-4aff-8ae9-7a843b180a28)
   
   donde la tabla "users" representa todos los usuarios que ingresarán a la plataforma, categorizados en diferentes tipos de usuarios tales como: normal, autor, colaborador. A su vez manejamos otros datos que pueden ser requeridos una vez el tipo del usuario cambie.
   
   la tabla videos, que es donde se almacenaran los datos referentes a los archivos multimedia de video alojados en la plataforma (Nota: Por motivos de rendimiento, es recomendable usar un sistema de almacenamiento en la nube como AWS o DigitalOcean, y solicitar el "activo" cada vez que sea necesario, por este motivo en la tabla tenemos la columna url) que le pertenecen a un usuario de tipo "autor" y que puede tener tanto comentarios como reseñas.
   
   la tabla comments es donde guardamos los comentarios que los usuarios (sin importar el tipo) le escriban a cada video, es decir que un video puede tener muchos comentarios.
   
   a su vez tenemos la tabla reviews, donde los usuarios podrán calificar y dejar una reseña sobre el video. Dicha calificación va de 1 a 5, siendo cinco (5) la mejor calificación y uno (1) la peor.
   
   En la imagen podemos observar las relaciones entre tablas, llaves primarias son las que se encuentran subrayadas, y las foraneas se encuentran especificadas.
   
