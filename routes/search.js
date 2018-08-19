var express = require("express");
var router = express.Router();
var request = require("request");
var bodyParser =  require("body-parser");
var HeadlineList = require("../models/headlineList");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res, next){
  res.render("search");
});

router.post('/', function(req, res, next) {
  var searchQuery = req.body.search
  request.post({
    "headers": {
      "content-type": "application/json",
      "X-Api-Key": process.env.API_KEY
    },
    "url": "http://api.ft.com/content/search/v1",
    "body": JSON.stringify({
      "queryString": searchQuery,
      "resultContext" : {
        "aspects" :[  "title","images","lifecycle", "metadata","editorial" ],
        "sortOrder" : "DESC",
        "sortField" : "initialPublishDateTime",
        "maxResults" : "20",
 	      "offset" : "0"
	    }
    })
  },
  function(error, response, body, headlineList = new HeadlineList) {
    if (error) {
      return (error);
    } else {
      var headlines = JSON.parse(body);
      headlineList.addHeadlines(headlines);
      res.render("search", {headlineList: headlineList});
    }
  });
});

module.exports = router
