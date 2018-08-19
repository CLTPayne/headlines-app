"use strict";

var dotenv = require("dotenv").config();
var request = require("supertest")("http://api.ft.com/content/search/v1");
var index = require("../routes/index");

describe("Search route", function() {

  describe("search query based API call to the FT", function() {

    var search = ({
      "queryString": "brexit",
      "resultContext" : {
        "aspects" :[  "title","images","lifecycle", "metadata","editorial" ],
        "sortOrder" : "DESC",
        "sortField" : "initialPublishDateTime",
        "maxResults" : "20",
        "offset" : "0"
      }
    });

    it("receives a 200 OK with a valid lower case search", function(done) {
      var search = ({
        "queryString": "brexit",
        "resultContext" : {
          "aspects" :[  "title","images","lifecycle", "metadata","editorial" ],
          "sortOrder" : "DESC",
          "sortField" : "initialPublishDateTime",
          "maxResults" : "20",
          "offset" : "0"
        }
      });
      request.post("/")
        .send(search)
        .set("X-API-Key", process.env.API_KEY)
        .expect(200, done);
    });

    it("receives a 200 OK with a valid upper case search", function(done) {
      var search = ({
        "queryString": "Denmark",
        "resultContext" : {
          "aspects" :[  "title","images","lifecycle", "metadata","editorial" ],
          "sortOrder" : "DESC",
          "sortField" : "initialPublishDateTime",
          "maxResults" : "20",
          "offset" : "0"
        }
      });
      request.post("/")
        .send(search)
        .set("X-API-Key", process.env.API_KEY)
        .expect(200, done);
    });

    it("receives a JSON object", function(done) {
      request.post("/")
        .send(search)
        .set("X-API-Key", process.env.API_KEY)
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json;charset=UTF-8", done);
    });

    it("receives a response body containing headlines", function(done) {
      request.post("/")
        .send(search)
        .set("X-API-Key", process.env.API_KEY)
        .set("Accept", "application/json")
        .end(function(err, res){
          if(err){
            return done(err);
          }
          search = res.body;
          done();
        });
    });

  });

});
