let model  = require("../models/monedero.model");

let controlador = {
    listar(req, res){
        model.find({},(err, result)=>{
            if(err)
                res.sendStatus(500);
            else
                res.json(result);
        });
    },
    guardar(req, res){
        let dato = new model;
        dato.periodo = req.body.periodo;
        dato.tipo = req.body.tipo;
        dato.descripcion = req.body.descripcion;
        dato.monto = req.body.monto;
        dato.save((err, newData)=>{
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else
                res.json(newData);
        });
    },
    buscarPorId(req, res){
        let val_id = req.params.id;
        model.findOne({'_id':val_id},(err, result)=>{
            if(err)
                res.sendStatus(500);
            else
                res.json(result);
        });
    },
    editar(req, res){
        let val_id = req.body.id;
        let datos = {
            periodo: req.body.periodo,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            monto: req.body.monto
        };
        model.findByIdAndUpdate(val_id, {"$set": datos}, { "new":true }, (err, result)=>{
            if(err)
                res.sendStatus(500);
            else
                res.json(result);
        });
    },
    eliminar(req, res){
        let val_id = req.params.id;
        model.findByIdAndDelete(val_id,(err, result)=>{
            if(err)
                res.sendStatus(500);
            else
                res.sendStatus(200);
        });
    }
};

module.exports = controlador;