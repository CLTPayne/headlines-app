const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index');
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry we're not sure that page exists?");
});
