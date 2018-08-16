"use strict";

function Headline(headline) {
  this.headline = headline;
};

Headline.prototype.text = function() {
  return this.headline.title.title;
};

Headline.prototype.theme = function() {
  return this.headline.metadata.primaryTheme.term.name;
};
