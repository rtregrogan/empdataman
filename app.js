const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');

const port = process.env.PORT || 8000;

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.listen(port, () => {
    console.log(`port is at ${port}`);
});

app.get('/', (req, res) => {
    res.render('setup')
});