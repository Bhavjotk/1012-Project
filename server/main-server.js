/* Our Main Server for Recipe Page */

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client'));

// Route
app.get('/', (req, res) => {
    res.sendFile('homepage.html', { root: __dirname + '/../client' });
});

// Listen on port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(__dirname + '/../client/homepage.html');
  }); //server will need to listen ... all the time!!
