const express = require('express')
const mainRouter = express.Router()
const mainController = require('../controller/mainController')

mainRouter.get('/',mainController.index)
mainRouter.get('/login',mainController.login)

module.exports = mainRouter


//mainRouter.get('/',)

