const path = require('path')
const fs = require('fs');

const noteListPath = path.resolve(__dirname,"../data/note.json");
const noteList = JSON.parse(fs.readFileSync(noteListPath,'utf-8'))

const mainController = {
  index : (req, res)=>{
    res.render("index", { note : noteList })
    // res.sendFile(path.join(__dirname, '../views/index.html'))
  },
  login : (req, res)=>{
    res.render("login",)
    //  res.sendFile(path.join(__dirname, '../views/login.html'))
  },
  noteApp : (req, res)=>{
    res.render("note",)
  }
}
module.exports = mainController
