const path = require('path');


module.exports = function(app) {

// retrieve home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// retrieve notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get other routes to touch index.html 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

}