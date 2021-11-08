const path = require('path');

module.exports = function(app) {

}
// retrieve notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get other routes to touch index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});