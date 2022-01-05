const { response, request, query } = require('express')


const getUsuarios = (req = request, res = response) => {
    const {nombre='no name', apellido='no last name'} = req.query
    res.json({
        ok: true,
        msg: "get API - Controlador",
        nombre,
        apellido 
    })
}

const postUsuarios = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        ok: true,
        nombre,
        edad
    })
}

const putUsuarios = (req, res = response) => {
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