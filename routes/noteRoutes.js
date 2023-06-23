const express = require('express'); 
const router = express.Router();

const noteController = require ("../controller/noteController")

router.get ("/" , noteController.showNote);

router.get("/formularioNota",noteController.createNote)
router.post("/",noteController.storeNote)


module.exports = router;


// const express = require('express')
// const noteRoutes = express.Router()
// const noteController = require('../controller/noteController')

// noteRoutes.get('/',noteController.index)
// noteRoutes.get('/login',noteController.login)

// module.exports = noteRoutes
