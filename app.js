const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`)
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry we're not sure that page exists?")
})