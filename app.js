const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`port is at ${port}`);
});

app.get('', (req, res) => {
    res.send('THIS IS HOME')
})