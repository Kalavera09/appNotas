 const fs = require('fs');
const path = require('path');

const noteListPath = path.resolve(__dirname, '../data/notas.json');
const noteList = JSON.parse(fs.readFileSync(noteListPath, 'utf8'));

const noteController = {
    mostrarNotas: (req,res) =>{
        let title ='Notas - Bloc de notas'
        res.render('nota',{title:title,notas:noteList})
    },
    crearNotas: (req,res) =>{
      let title ='Crear notas'
      res.render('notas/formularioNota', {title:title})    
    },
    guardarNota:(req,res) =>{
      let note = req.body
      note['id'] = parseInt(noteList[noteList.length - 1].id) + 1
      noteList.push(note)
      fs.writeFileSync(noteListPath,JSON.stringify(noteList,null,2))
      res.redirect('/')
    }
}

module.exports = noteController


// const noteController ={
//      getAllNotes:(req,res)=>{
//          res.render('index')
//      }
//  }