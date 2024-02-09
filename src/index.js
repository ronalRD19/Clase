import  express from 'express'; // Importamos la librería Express
import fs from 'fs'; // Importamos la librería fs para acceder al sistema de archivos
import bodyParser from 'body-parser'; // Importamos body-parser para analizar los cuerpos de las solicitudes HTTP
const app = express(); // Inicializamos Express y lo almacenamos en la variable app 


const readData = () =>{ // Definimos una función llamada readData
    const data = fs.readFileSync("./src/db.json"); // Leemos el contenido del archivo db.json
    return JSON.parse(data); // Convertimos el contenido a un objeto JavaScript y lo devolvemos
}

app.get("/",(req, res)=> { // Definimos una ruta para la raíz del servidor
  res.send('Welcome!'); // Enviamos el mensaje de bienvenida como respuesta
});
readData();

app.get("/equiposFutbol",(req,res)=>{ // Definimos una ruta para /equiposFutbol
    const data =readData();  // Leemos los datos del archivo JSON utilizando la función readData
    res.json(data.equiposFutbol); // Enviamos los datos de los equipos de fútbol como respuesta en formato JSON
});

app.get("/equiposFutbol/nombre/:id", (req, res) => {
    const id = parseInt(req.params.id); // Convertimos el ID a un número entero
    const data = readData(); // Leemos los datos del archivo JSON
    const equipo = data.equiposFutbol.find(equipo => equipo.id === id); // Buscamos el equipo por su ID
    if (equipo) {
        res.json({ Nombre: equipo.nombre });// Devolvemos solo el nombre del equipo
    } else {
        res.status(404).send("Equipo no encontrado");
    }
});

app.listen(3000,()=>{ // Iniciamos el servidor en el puerto 3000
   console.log('Sever on port 3000'); // Imprimimos un mensaje en la consola
});

app.use(bodyParser.json()); // Configuramos body-parser como middleware para analizar cuerpos de solicitud en formato JSON

try {
    const data = fs.readFile("./src/db.json"); // Intentamos leer el archivo db.json
} catch (error) { // Capturamos cualquier error que ocurra
    console.log('error:${error}'); // Imprimimos el error en la consola
}

//Initialiazations


//Settings


//Middlewares

//Global variables

//Routes

//Server is listenning



