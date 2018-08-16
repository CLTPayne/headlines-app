"use strict";

var describe, it, expect, beforeEach, Headline;

describe("Headline", function() {

  var headline;

  var apiResponseMock = {
                "title": {
                    "title": "Test headline 1"
                },
                "lifecycle": {
                    "initialPublishDateTime": "2018-08-14T17:16:27Z",
                    "lastPublishDateTime": "2018-08-14T17:16:27Z"
                },
                "editorial": {
                    "subheading": "Penalties should be imposed judiciously and co-ordinated with allies"
                },
                "metadata": {
                    "primaryTheme": {
                        "term": {
                            "name": "US politics & policy"
                        }
                    },
                },
                "images": [
                    {
                        "url": "https://www.testimage.com"
                    }
                  ]
                }


  beforeEach(function() {
    headline = new Headline(apiResponseMock);
  });

  it('contains a news story headline', function() {
    expect(headline.text()).toEqual("Test headline 1");
  });

});
