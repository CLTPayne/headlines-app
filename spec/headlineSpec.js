"use strict";

describe("Headline", function() {

  var Headline = require("../models/headline");
  var headline;

  describe("Fully populated headline info", function() {

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
        "primarySection": {
          "term": {
            "name": "Test theme"
          }
        },
        "primaryTheme": {
          "term": {
            "name": "Test alternate theme"
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


  describe("Partially populated headline info", function() {

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
            "name": "Test alternate theme 2"
          }
        },
      },
      "images": []
    };

    beforeEach(function() {
      headline = new Headline(headlineDouble);
    });

    it("returns an alternate theme if primary section field is not populated", function() {
      expect(headline.theme()).toEqual("Test alternate theme 2");
    });

    it("returns null if headline image array is not populated", function() {
      expect(headline.image()).toEqual(null);
    });

  });

  describe("Missing headline info", function() {

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
      },
    };

    beforeEach(function() {
      headline = new Headline(headlineDouble);
    });

    it("returns null if there is headline theme is not populated in metadata", function() {
      expect(headline.theme()).toEqual(null);
    });

    it("returns null if there is no headline image data", function() {
      expect(headline.image()).toEqual(null);
    });

  });

});
