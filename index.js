//
//  Katex Extension
//  cover
//  ```katex
//  x^1
//  ```
//  to x^1 equal Katex expression

(function () {
  'use strict';
  var katex = require('katex');

  var twitter = function (converter) {
    return [
      {
        type:    'lang',
        filter: function (text) {
          return text.replace(/```katex([\n\S]+)```/, function(flag,match,end){
            return katex.renderToString(match);
          });
        }
      }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extensions.twitter = twitter;
  }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = twitter;
  }

}());
