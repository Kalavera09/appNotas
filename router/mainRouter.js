const express = require('express')
const mainRouter = express.Router()
const mainController = require('../controller/mainController')

mainRouter.get('/',mainController.index)

//mainRouter.get('/',mainController.login)

//mainRouter.get('/',)

module.exports = mainRouter
