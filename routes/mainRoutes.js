const express = require('express')
const mainRoutes = express.Router()
const mainController = require('../controller/mainController')

mainRoutes.get('/',mainController.index)
mainRoutes.get('/login',mainController.login)
mainRoutes.get('/note',mainController.noteApp)

module.exports = mainRoutes


//mainRouter.get('/',)
