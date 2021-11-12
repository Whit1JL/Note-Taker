const router = require('express').Router();
var saveData = require('../db/saveData');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs');


// API ROUTE
    //get request 
    router.get("/notes", function (req,res) {
        saveData
            .retrieveNotes()
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
        // res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
    });

    //post request
    router.post("/notes", function (req,res) {
        saveData
            .addNote(req.body)
            .then((note) => res.json(note))
            .catch(err => res.status(500).json(err));
        
    });

    //delete request
    router.delete("/notes/:id", function (req,res) {
        saveData
            .deleteNote(req.params.id)
            .then(() => res.json({ ok: true}))
            .catch(err => res.status(500).json(err));
   
    });
    
module.exports = router;