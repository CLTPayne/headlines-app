var express = require('express');
var app = express();
var path = require('path');
var dotenv = require('dotenv').config()
var index = require('./routes/index');
var search = require('./routes/search');

var PORT = process.env.PORT || 3000;

require('./prod')(app);

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', index);
app.use('/search', search);

app.listen(PORT, function() {
  console.log(`App is listening on port ${PORT}!`);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry we're not sure that page exists?");
});
