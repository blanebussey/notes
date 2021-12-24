const router = require("express").Router();
const fs = require("fs");

//get method note
router.get("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(notes);
  });

//post add new note

router.post("/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
   const newNote = req.body
   newNote.id = Date.now()
   notes.push(newNote)
   fs.writeFileSync("./db/db.json",JSON.stringify(notes))
   res.status(200).send()
  });

//remove note 

router.delete("/notes/:id", (req, res)=> {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const id = Number(req.params.id)
  const filteredNotes = notes.filter(n => n.id !== id)
  fs.writeFileSync("./db/db.json",JSON.stringify(filteredNotes))
  res.status(200).send()
})
















module.exports = router;