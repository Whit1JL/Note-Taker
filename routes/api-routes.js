const router = require('express').Router();
var noteData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


// API ROUTE
    //get request 
    router.get("/notes", function (req,res){
        res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
    })

    //post request
    router.post("/notes", function (req,res){
        req.body.id = uuidv4()
        noteData.push(req.body)
        fs.writeFile("../db/db.json", JSON.stringify(noteData), function(err){
            if(err) {
                throw error
            }
            res.json("saved")
        })
        
    })
    //delete request
    router.delete("/notes/:id", function (req,res){
        var note = req.params.id
        console.log(note)
        var journal = []
  
        for (var i = 0; i < noteData.length; i++) {
          if (noteData[i].id !== note) {
             journal.push(noteData[i]);
          }
        }
        noteData = journal
        fs.writeFile("./db/db.json", JSON.stringify(noteData), function(err){
            if(err) {
                throw error
            }
            res.json("deleted")
        })
   
    })
module.exports = router;