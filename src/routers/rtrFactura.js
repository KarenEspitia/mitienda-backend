const express = require('express')
const router = express.Router()
const ctrFactura = require('../controllers/ctrFactura')

router.post('/factura', ctrFactura.guardar) //crear
router.get('/factura', ctrFactura.listar) //read
router.get('/factura/id/:id', ctrFactura.buscarId)
router.get('/factura/num/:num', ctrFactura.buscarNum)
router.get('/factura/obs/:obs', ctrFactura.buscarObs)
router.delete('/factura/:id', ctrFactura.eliminar)
router.put('/factura', ctrFactura.actualizar)

module.exports = router