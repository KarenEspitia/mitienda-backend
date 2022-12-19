require("./database")
const { request } = require('express')
const express = require('express')
const app = express ()
const cors = require('cors')
const PORT = 5001

//configuraciones para trabajar con peticiones HTTP post, get, delete, put
app.use(cors())
app.use(express.json())

//Rutas
app.use('/',require('./routers/rtrFactura'))

app.listen(PORT,(req,res) => {
  console.log("Servidor en linea trabajando en el puerto: ",PORT)
})