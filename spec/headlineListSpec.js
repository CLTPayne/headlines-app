"use strict";

var describe, it, expect, beforeEach, HeadlineList;

describe("HeadlineList", function() {

  var headlineList;

  var apiResponseMock = {
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
              "primaryTheme": {
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
          },
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
              "primaryTheme": {
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

});
