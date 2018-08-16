"use strict";

var describe, it, expect, beforeEach, Headline;

describe("Headline", function() {

  var headline;

  var headlineDouble = {
    "title": {
      "title": "Test headline 1"
    },
    "lifecycle": {
      "initialPublishDateTime": "2018-08-14T17:16:27Z",
      "lastPublishDateTime": "2018-08-14T17:16:27Z"
    },
    "editorial": {
      "subheading": "Test summary of what this story is about"
    },
    "metadata": {
      "primaryTheme": {
        "term": {
          "name": "Test theme"
        }
      },
    },
    "images": [
      {
        "url": "https://www.testimage.com"
      }
    ]
  };

  beforeEach(function() {
    headline = new Headline(headlineDouble);
  });

  it("accesses a news story headline", function() {
    expect(headline.text()).toEqual("Test headline 1");
  });

  it("accesses a news story subheading", function() {
    expect(headline.subheading()).toEqual("Test summary of what this story is about");
  });

  it("accesses a news story theme", function() {
    expect(headline.theme()).toEqual("Test theme");
  });

  it("accesses a news story image", function() {
    expect(headline.image()).toEqual("https://www.testimage.com");
  });

});
