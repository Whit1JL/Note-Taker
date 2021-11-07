const express = require("express")
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

//create an express server and port
const app = express();
const PORT = process.env.PORT || 3004;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

//server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});