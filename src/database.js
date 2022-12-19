const mongoose = require ("mongoose")

mongoose
.connect("mongodb+srv://karen:karen1234@cluster0.f8nlfue.mongodb.net/mitienda?retryWrites=true&w=majority")
.then(console.log("conecto base de datos"))
.catch(err => console.log("fallo conexion"+ err))