"use strict";

function HeadlineList() {
  this.headlines = [];
}

HeadlineList.prototype.addHeadlines = function(apiResponse) {
  for (var i = 0; i < apiResponse.results[0].results.length; i++) {
    var headline = new Headline(apiResponse.results[0].results[i]);
    this.headlines.push(headline);
  }
};
