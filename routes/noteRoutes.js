const express = require('express'); 
const router = express.Router();

const noteController = require ("../controller/noteController")

router.get ("/" , noteController.getAllNote);

router.get("/createNote.ejs",noteController.createNote)
router.get("/deleteNote.ejs",noteController.deleteNote)
router.get("/detailNote.ejs",noteController.detailById)
router.get("/editNote.ejs",noteController.editNote)
router.post("/",noteController.storeNote)


module.exports = router;
