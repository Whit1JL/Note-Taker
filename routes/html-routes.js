const html = require('express').Router();
const path = require('path');
const router = require('express').Router();

// retrieve notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});

// get other routes to touch index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

module.exports = html;