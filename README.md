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
