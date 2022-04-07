const express = require('express');
const path = require('path');
// Para leer el archivo .env y establecer las variables de entorno
require('dotenv').config();

// App de Express
const app = express();

// Node Server
// Levanta server con la configuracion seteada en app 
// y le anexa la aplicacion de sockets
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



// Public path
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));



server.listen(process.env.PORT, (err) =>{

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', 3000);
    
})