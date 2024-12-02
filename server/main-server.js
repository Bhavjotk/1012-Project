/* Our Main Server for Recipe Page */

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname));

// Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homepage.html');
});

// Listen on port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  }); //server will need to listen ... all the time!!
