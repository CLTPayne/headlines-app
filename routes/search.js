var express = require("express");
var router = express.Router();
var Request = require("request");
var bodyParser =  require("body-parser");
var HeadlineList = require("../models/headlineList");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function(req, res, next){
  res.render("search");
});

router.post('/', function(req, res, next) {
  res.send("Test Post Search");
});

module.exports = router
