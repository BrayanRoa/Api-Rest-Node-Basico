const { response, request, query } = require('express')

const getUsuarios = (req = request, res = response) => {
    //* desestructurando los query que vienen en el path de la ruta
    const {nombre='no name', apellido='no last name'} = req.query
    res.json({
        ok: true,
        msg: "get API - Controlador",
        nombre,
        apellido 
    })
}

const postUsuarios = (req, res = response) => {
    //* desestructuro los datos que vienen en el body de la petición
    const { nombre, edad } = req.body;

    res.status(201).json({
        ok: true,
        nombre,
        edad
    })
}

const putUsuarios = (req, res = response) => {
    
    //* otra forma de obtenerlo es esta
    //* const id = req.params.id
    const { id } = req.params

    res.json({
        "msg": "put API - Controlador",
        "id": id
    })

}

const deleteUsuarios = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API - Controlador"
    })
}

module.exports = {
    getUsuarios,
    postUsuarios,
    deleteUsuarios,
    putUsuarios
}