"use strict";

var server = require("../app")
var request = require("supertest");

describe('loading express', function () {

  it('responds to /', function(done) {
    request(server)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).toEqual(200);
        done();
      })
  });

  it('responds to /search', function(done) {
    request(server)
      .post('/search')
      .end(function(err, res) {
        expect(res.statusCode).toEqual(200);
        done();
      })
  });


  it('404 everything else', function(done) {
    request(server)
      .get('/abcd')
      .end(function(err, res) {
        expect(res.statusCode).toEqual(404);
        done();
      })
  });

});
