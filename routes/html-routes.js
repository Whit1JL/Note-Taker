const router = require('express').Router();
const path = require('path');

// retrieve notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/notes.html'));
});

// get other routes to touch index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'));
});

module.exports = router;