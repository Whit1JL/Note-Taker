const express = require("express");
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

//create an express server and port
const app = express();
const PORT = process.env.PORT || 3005;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use(express.static('public'));

// middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`)
});