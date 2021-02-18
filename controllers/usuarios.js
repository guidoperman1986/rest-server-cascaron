const { request, response } = require('express');

const usuarioGet = (req=request, res=response) => {
    //const params = req.query;

    res.json({
        msg:'get APi'
    });
}

const usuarioPut = (req, res=response) => {
    const { id } = req.params;

    res.json({
        msg:'put APi'
    });
}

const usuarioPost = (req, res=response) => {
    const body = req.body;

    res.json({
        msg:'post APi',
        body
    });
}

const usuarioDelete = (req, res=response) => {
    res.json({
        msg:'delete APi'
    });
}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
}