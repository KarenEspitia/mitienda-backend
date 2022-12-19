const ctrFactura = {}

const factura = require('../models/factura')
//Funcion CRUD
//Create = insert into document
ctrFactura.guardar = async (req,res) => {
  await factura
  .create(req.body)
  .then(data => res.json(data))
  .catch(err => res.json(err))
}
//Funcion CRUD
// read - buscar
ctrFactura.listar = async (req,res) => {
  await factura
  .find()
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

//buscar por ID
ctrFactura.buscarId = async (req,res) =>{
  await factura
  .findById(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.json(err))
}
//buscar por numero
ctrFactura.buscarNum = async (req,res) =>{
  await factura
  .find(
    {numero : req.params.num}
  )
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

// buscar por palabras
ctrFactura.buscarObs = async(req,res) =>{
  await factura
  .find(
    {observacion : RegExp(req.params.obs,'i')}
  )
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

//actualizar datos - update
ctrFactura.actualizar =async(req,res)=>{
  const {_id, ...body} = req.body
  await factura
  .updateOne({_id : _id},{$set:body})
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

//Delete
ctrFactura.eliminar = async(req,res) =>{
  await factura
  .deleteOne({_id : req.params.id})
  .then(data => res.json(data))
  .catch(err => res.json(err))
}



module.exports = ctrFactura