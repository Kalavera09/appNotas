const path = require('path')
const mainController = {}

mainController.index = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
}
//mainController.login = (req, res)=>{
//    res.sendFile(path.join(__dirname, '../views/login.html'))
//}
//const mainController = {
//    index:(req,res) =>{
  //      res.sendFile(path.join(__dirname, '../views/index.html')
    // )}   
module.exports = mainController