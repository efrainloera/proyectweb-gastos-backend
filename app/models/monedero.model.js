let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let objSchema = new Schema({
    periodo: { type: String, required: true},
    tipo: { type: String, required: true}, 
    descripcion: { type: String, required: true},
    monto: { type: Number, required: true},
    fecha_registro: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('movimientos',objSchema,'movimientos');