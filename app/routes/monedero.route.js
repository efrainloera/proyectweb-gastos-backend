let express = require("express");
let router = express.Router();
let controlador = require('../controllers/monedero.controller');

router.get('/',(req, res)=>{
    controlador.listar(req, res);
});

router.post('/',(req, res)=>{
    controlador.guardar(req, res);
});

router.get('/:id',(req, res)=>{
    controlador.buscarPorId(req, res);
});

router.put('/',(req, res)=>{
    controlador.editar(req, res);
});

router.delete('/:id',(req, res)=>{
    controlador.eliminar(req, res);
});

module.exports = router;