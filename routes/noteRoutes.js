const express = require('express'); 
const router = express.Router();

const noteController = require ("../controller/noteController")

router.get ("/" , noteController.mostrarNotas);

router.get("/formularioNota",noteController.crearNotas)
router.post("/",noteController.guardarNota)


module.exports = router;


// const express = require('express')
// const noteRoutes = express.Router()
// const noteController = require('../controller/noteController')

// noteRoutes.get('/',noteController.index)
// noteRoutes.get('/login',noteController.login)

// module.exports = noteRoutes
