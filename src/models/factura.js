const mongoose = require('mongoose')

const facturaSchema = new mongoose.Schema({
  numero : { type: Number, require:true },
  fecha : { type: Date, require:true},
  idCliente : { type: mongoose.Types.ObjectId, ref:"cliente", require:true},
  total : { type: Number, require:true },
  observacion : { type: String, require:true },
  direccion : { type: String, require:true }
},{
  timestamps:true
})

module.exports = mongoose.model("factura", facturaSchema)