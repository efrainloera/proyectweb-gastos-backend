const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GASTOS_PERSONALES.GASTOS')
.then(()=>{
  console.log('Conectados a la base de datos');
})
.catch((err)=>{
  console.log('Error al conectar a la base de datos', err);
  process.exit();
});

const corsOptions = {
  origin: 'http://localhost:3000',
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const monederoRoute = require('./app/routes/monedero.route');
app.use('/api/v1/monedero',monederoRoute);

app.get('/',(req, res)=>{
    res.send('<h1 align="center">Bienvenido a tus gastos personales</h1>');
});

app.listen(3001,()=>{
    console.log('Servidor en el puerto 3001');
});