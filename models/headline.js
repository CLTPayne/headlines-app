"use strict";

function Headline(headline) {
  this.headline = headline;
}

Headline.prototype.text = function() {
  return this.headline.title.title;
};

Headline.prototype.subheading = function() {
  return this.headline.editorial.subheading;
};

Headline.prototype.theme = function() {
  if (this.headline.metadata.primarySection !== undefined) {
    return this.headline.metadata.primarySection.term.name;
  } else if (this.headline.metadata.primaryTheme !== undefined) {
    return this.headline.metadata.primaryTheme.term.name;
  } else {
    return null
  }
};

Headline.prototype.image = function() {
  if (this.headline.images.length !== 0) {
    return this.headline.images[0].url;
  } else if (this.headline.images === undefined) {
    return null;
  } else {
    return null;
  }
};

module.exports = Headline;
