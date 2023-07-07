const express = require('express'); 
const router = express.Router();

const noteController = require ("../controller/noteController")

router.get ("/" , noteController.getAllNote);

router.get("/createNote",noteController.createNote)
router.get("/deleteNote",noteController.deleteNote)
router.get("/detailNote/:id",noteController.detailById)
router.get("/editNote/:id",noteController.editNote)
router.post("/",noteController.storeNote)


module.exports = router;
