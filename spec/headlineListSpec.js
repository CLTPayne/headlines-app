"use strict";

describe("HeadlineList", function() {

  var HeadlineList = require('../models/headlineList');
  var headlineList;

  var singleApiResponseDouble = {
    "results": [
      {
        "results": [
          {
            "title": {
              "title": "Test title 2"
            },
            "lifecycle": {
              "initialPublishDateTime": "2018-08-14T17:16:27Z",
              "lastPublishDateTime": "2018-08-14T17:16:27Z"
            },
            "editorial": {
              "subheading": "Test summary of what this story is about 2"
            },
            "metadata": {
              "primarySection": {
                "term": {
                  "name": "Test theme 2",
                }
              }
            },
            "images": [
              {
                "url": "https://www.testimage2.com"
              }
            ]
          }
        ]
      }
    ]
  };

  var multiApiResponseDouble = {
    "results": [
      {
        "results": [
          {
            "title": {
              "title": "Test title 3"
            },
            "lifecycle": {
              "initialPublishDateTime": "2018-08-14T17:16:27Z",
              "lastPublishDateTime": "2018-08-14T17:16:27Z"
            },
            "editorial": {
              "subheading": "Test summary of what this story is about 3"
            },
            "metadata": {
              "primarySection": {
                "term": {
                  "name": "Test theme 3",
                }
              }
            },
            "images": [
              {
                "url": "https://www.testimage3.com"
              }
            ]
          },
          {
            "title": {
              "title": "Test title 4"
            },
            "lifecycle": {
              "initialPublishDateTime": "2018-08-14T17:16:27Z",
              "lastPublishDateTime": "2018-08-14T17:16:27Z"
            },
            "editorial": {
              "subheading": "Test summary of what this story is about 4"
            },
            "metadata": {
              "primarySection": {
                "term": {
                  "name": "Test theme 4",
                }
              }
            },
            "images": [
              {
                "url": "https://www.testimage4.com"
              }
            ]
          }
        ]
      }
    ]
  };

  beforeEach(function() {
    headlineList = new HeadlineList;
  });

  it("initializes with an empty array to store headlines", function() {
    expect(headlineList.headlines).toEqual([]);
  });

  it("stores a single headline", function() {
    headlineList.addHeadlines(singleApiResponseDouble);
    expect(headlineList.headlines[0].headline.title.title).toEqual("Test title 2");
  });

  it("stores an array of headlines", function() {
    headlineList.addHeadlines(multiApiResponseDouble);
    expect(headlineList.headlines.length).toEqual(2);
  });

  it("stores more than one headline", function() {
    headlineList.addHeadlines(multiApiResponseDouble);
    expect(headlineList.headlines[1].headline.title.title).toEqual("Test title 4");
  });

});
