 const fs = require('fs');
const path = require('path');

// const { v4: uuidv4 } = require('uuid');

const noteListPath = path.resolve(__dirname,"../data/note.json");
const noteList = JSON.parse(fs.readFileSync(noteListPath,'utf-8'));

const noteController = {
    getAllNote : (req,res)=>{
        res.render("index", { note : noteList })
    },
    getNotebyId:(req, res)=>{
        let id=req.params.id
        const filteredNote = noteList.find((note) => {
            return note.id == id;
          });
        res.render("note/createNote/:id",{filteredNote})
    },
    detailById : (req,res)=>{
        //muestra el detalle de una nota especifica.
        const id = req.params.id;
        //buscamos en el array la nota que coincida con el que llega por parametro.
        const filteredNote = noteList.find((note) => {
          return note.id == id;
        });
           res.render("note/detailNote", {filteredNote});
        },
    // crea una nota y lo guarda
    createNote : (req , res) => {
        res.render("note/createNote");
    },
    storeNote : (req , res) => {
        let note = req.body;
        noteList.push({note});
        fs.writeFileSync(noteListPath,JSON.stringify(noteList,null,2));
        res.redirect("/note");
    },
    //------------------------
    // edita una nota y hace un update
    editNote : (req , res) => {
        const id = req.params.id;
        const filteredNote = noteList.find((note) => {
            return note.id == id;
        });
        res.render("note/editNote", {note : filteredNote});
    },
    updateNote : (req , res) => {
        let id = req.params.id;
        let newNote = req.body;
        newNote.id = id;
        for (let index = 0; index < noteList.length; index++) {
            const elements = noteList[index];
            if (elements.id == id){
                // noteList[index] = newNote;
               noteList.put(newNote);
            }
        }
        fs.readFileSync(noteListPath,JSON.stringify(noteList,null,2));
        res.redirect("/note");
    },
    // ------------------------
    // borra una nota segun el id pasado
    deleteNote : (req , res) => {
        let id = req.params.id;
        let note = noteList.find(note => note.id == id);
        res.render("note/deleteNote", {note : note});
    
    }
}
module.exports = noteController;