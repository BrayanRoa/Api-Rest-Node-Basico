const express = require('express')
const cors    = require('cors')

class Server {

    //? inicializa el server de express
    constructor() {
        this.app  = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        this.middleware();
        this.routes();
    }

    //? MIDDLEWARE
    middleware(){
        //? CORS
        this.app.use(cors())

        //? LECTURA Y PARSEO DEL BODY (UTIL PARA EL POST O PUT QUE RECIBE INFO)
        this.app.use( express.json())

        //? direcctorio publico, busca en esta carpeta el index.html
        this.app.use( express.static('public') )
    }

    //? mis rutas definidas
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server Running On Port ${this.port}`);
        })
    }
}

module.exports = Server;