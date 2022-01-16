require('dotenv').config()
const Server = require('./models/server')

//* instancia de la clase server
const server = new Server();

server.listen();
