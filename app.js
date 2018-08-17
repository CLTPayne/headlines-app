var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index');
var PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT, function() {
  console.log(`App is listening on port ${PORT}!`);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry we're not sure that page exists?");
});
