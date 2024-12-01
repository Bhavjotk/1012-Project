const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('client'));

// Route
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello!</h1>')
});

// Listen on port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  }); //server will need to listen ... all the time!!